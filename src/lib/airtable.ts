import Airtable from 'airtable';

import {
  Author,
  Blockchain,
  Category,
  Resource,
  Tag,
} from './../types/airtable';
import {
  AIRTABLE_READONLY_KEY,
  AIRTABLE_RESOURCE_BASE,
} from '../utils/DeveloperDaoConstants';

const airTable = new Airtable({ apiKey: AIRTABLE_READONLY_KEY });

export const getAirtableResources = async (): Promise<Resource[]> => {
  const resourceBaseCall = airTable.base(AIRTABLE_RESOURCE_BASE);

  const authors = (await getResource('Author')) as Author[];
  const blockchains = (await getResource('Blockchain')) as Blockchain[];
  const categories = (await getResource('Category')) as Category[];
  const resources = (await getResource('Resource')) as Resource[];
  const tags = (await getResource('Tags')) as Tag[];

  const authorMap: { [key: string]: { name: string; dev: boolean } } = {};
  const blockchainMap: { [key: string]: string } = {};
  const categoryMap: { [key: string]: string } = {};
  const tagMap: { [key: string]: string } = {};

  authors.forEach((item) => {
    authorMap[item.id] = {
      name: item.fields.Name,
      dev: item.fields['Developer DAO Member'],
    };
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
      ...(resource.fields.Author?.length < 0 && {
        extendedAuthors: resource.fields.Author?.map(
          (item: string) => authorMap[item],
        ),
      }),
      ...(resource.fields.Blockchain?.length < 0 && {
        Blockchain: resource.fields.Blockchain?.map(
          (item: string) => blockchainMap[item],
        ),
      }),
      ...(resource.fields.Category?.length < 0 && {
        Category: resource.fields.Category?.map(
          (item: string) => categoryMap[item],
        ),
      }),
      ...(resource.fields.Tags?.length < 0 && {
        Tag: resource.fields.Tags?.map((item: string) => categoryMap[item]),
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
