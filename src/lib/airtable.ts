import Airtable from 'airtable';

import {
  Author,
  Blockchain,
  Category,
  Resource,
  Tag,
} from './../types/airtable';

// const airTable = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_READONLY_KEY });

export const getAirtableResources = async (
  airtableKey: string | undefined,
  airtableBase: string | undefined,
): Promise<Resource[]> => {
  // return empty if the resource base key is undefined - not expected but satisfies typescript
  if (!airtableBase || !airtableKey) return [];
  const airTable = new Airtable({ apiKey: airtableKey });

  const resourceBaseCall = airTable.base(airtableBase);

  const authors = (await getResource('Author')) as Author[];
  const blockchains = (await getResource('Blockchain')) as Blockchain[];
  const categories = (await getResource('Category')) as Category[];
  const resources = (await getResource('Resource')) as Resource[];
  const tags = (await getResource('Tags')) as Tag[];

  const authorMap: {
    [key: string]: { name: string; dev: boolean; twitter?: string };
  } = {};
  const blockchainMap: { [key: string]: string } = {};
  const categoryMap: { [key: string]: string } = {};
  const tagMap: { [key: string]: string } = {};

  const cleanTwitterString = (authorTwitter: string | undefined) => {
    if (!authorTwitter) return;
    // prevent casing weirdness and ensure lowercasae for checking
    const compare = authorTwitter.toLowerCase();
    // lazy, ifs for the common distortions
    // either the '.com/' construct or starting with @
    if (compare.indexOf('twitter.com') > -1) {
      const comIndex = compare.indexOf('.com/') + 5;
      return authorTwitter.substring(comIndex, authorTwitter.length);
    }
    if (compare.startsWith('@')) {
      return authorTwitter.substring(1, authorTwitter.length);
    }
    return authorTwitter;
  };

  authors.forEach((item) => {
    // ensure that we set a true or false value (not undefined)
    const authorValue: { name: string; dev: boolean; twitter?: string } = {
      name: item.fields.Name,
      dev: !!item.fields['Developer DAO Member'],
    };
    if (item.fields.Twitter) {
      authorValue.twitter = cleanTwitterString(item.fields.Twitter);
    }
    authorMap[item.id] = authorValue;
  });

  blockchains.forEach((item) => {
    blockchainMap[item.id] = item.fields.Name;
  });

  categories.forEach((item) => {
    categoryMap[item.id] = item.fields.Name;
  });

  tags.forEach((item) => {
    tagMap[item.id] = item.fields.Name;
  });

  return resources.map((resource: Resource) => {
    const newFields = {
      ...resource.fields,
      ...(resource.fields.Author?.length > 0 && {
        extendedAuthors: resource.fields.Author?.map(
          (item: string) => authorMap[item],
        ),
      }),
      ...(resource.fields.Blockchain?.length > 0 && {
        Blockchain: resource.fields.Blockchain?.map(
          (item: string) => blockchainMap[item],
        ),
      }),
      ...(resource.fields.Category?.length > 0 && {
        Category: resource.fields.Category?.map(
          (item: string) => categoryMap[item],
        ),
      }),
      ...(resource.fields.Tags?.length > 0 && {
        Tags: resource.fields.Tags?.map((item: string) => tagMap[item]),
      }),
    };
    return {
      ...resource,
      fields: newFields,
    };
  });

  async function getResource(
    type: string,
  ): Promise<Author[] | Blockchain[] | Category[] | Tag[] | Resource[]> {
    let data: any[] = [];
    return new Promise((resolve) => {
      resourceBaseCall(type)
        .select({})
        .eachPage(
          (records, fetchNextPage) => {
            data = data.concat(records.map((item) => item._rawJson));
            fetchNextPage();
          },
          (err) => {
            if (err) console.error('Error:', err);
            return resolve(data);
          },
        );
    });
  }
};
