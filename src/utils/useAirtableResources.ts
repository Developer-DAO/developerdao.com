import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import Airtable from 'airtable';
import { useTranslation, TFunction } from 'next-i18next';

import {
  AIRTABLE_READONLY_KEY,
  AIRTABLE_RESOURCE_BASE,
} from './DeveloperDaoConstants';
import { Author, Blockchain, Category, Resource, Tag } from '../types/airtable';

export const useAirtableResources = () => {
  const { t } = useTranslation();
  const [airbase, setAirbase] = useState('Resources');
  const [airtable, setAirtable] = useState<Airtable>();
  const [resourceBaseList, setResourceBaseList] = useState<Resource[]>([]);
  const toast = useToast();

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_AIRTABLE_KEY &&
      process.env.NEXT_PUBLIC_AIRTABLE_BASE
    ) {
      setAirtable(new Airtable({ apiKey: AIRTABLE_READONLY_KEY }));
      setAirbase(AIRTABLE_RESOURCE_BASE);
    } else {
      toast({
        title: t('airtableError'),
        isClosable: true,
      });
    }
  }, []);

  useEffect(() => {
    if (airtable && airbase) {
      listQuery();
    }
  }, [airtable, airbase]);

  const listQuery = () => {
    if (!airtable) return;
    const resourceBaseCall = airtable.base(airbase);
    // local variables to not start throwing state into a mess with the callbacks in each select
    let authorList: Author[] = [];
    let blockchainList: Blockchain[] = [];
    let categoryList: Category[] = [];
    let resourceList: Resource[] = [];
    let tagList: Tag[] = [];

    resourceBaseCall('Author')
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          authorList = authorList.concat(records.map((item) => item._rawJson));
          fetchNextPage();
        },
        (err) => {
          if (err) console.error(t('error'), err);
          hydrateResourceRecords(
            authorList,
            blockchainList,
            categoryList,
            resourceList,
            tagList,
          );
        },
      );
    resourceBaseCall('Blockchain')
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          blockchainList = blockchainList.concat(
            records.map((item) => item._rawJson),
          );
          fetchNextPage();
        },
        (err) => {
          if (err) console.error(t('error'), err);
          hydrateResourceRecords(
            authorList,
            blockchainList,
            categoryList,
            resourceList,
            tagList,
          );
        },
      );
    resourceBaseCall('Category')
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          categoryList = categoryList.concat(
            records.map((item) => item._rawJson),
          );
          fetchNextPage();
        },
        (err) => {
          if (err) console.error(t('error'), err);
          hydrateResourceRecords(
            authorList,
            blockchainList,
            categoryList,
            resourceList,
            tagList,
          );
        },
      );
    resourceBaseCall('Resource')
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          resourceList = resourceList.concat(
            records.map((item) => item._rawJson),
          );
          fetchNextPage();
        },
        (err) => {
          if (err) console.error(t('error'), err);
          hydrateResourceRecords(
            authorList,
            blockchainList,
            categoryList,
            resourceList,
            tagList,
          );
        },
      );
    resourceBaseCall('Tags')
      .select({})
      .eachPage(
        (records, fetchNextPage) => {
          tagList = tagList.concat(records.map((item) => item._rawJson));
          fetchNextPage();
        },
        (err) => {
          if (err) console.error(t('error'), err);
          hydrateResourceRecords(
            authorList,
            blockchainList,
            categoryList,
            resourceList,
            tagList,
          );
        },
      );
  };

  const hydrateResourceRecords = (
    authorList: Author[],
    blockchainList: Blockchain[],
    categoryList: Category[],
    resourceList: Resource[],
    tagList: Tag[],
  ) => {
    // bails out if loading has not yet completed (uncontrolled async operations)
    if (
      !authorList.length ||
      !blockchainList.length ||
      !categoryList.length ||
      !resourceList?.length ||
      !tagList.length
    ) {
      return;
    }

    const authorMap: { [key: string]: { name: string; dev: boolean } } = {};
    const blockchainMap: { [key: string]: string } = {};
    const categoryMap: { [key: string]: string } = {};
    const tagMap: { [key: string]: string } = {};

    authorList.forEach((item) => {
      authorMap[item.id] = {
        name: item.fields.Name,
        dev: item.fields['Developer DAO Member'],
      };
    });
    blockchainList.forEach((item) => {
      blockchainMap[item.id] = item.fields.Name;
    });
    categoryList.forEach((item) => {
      categoryMap[item.id] = item.fields.Name;
    });
    tagList.forEach((item) => {
      tagMap[item.id] = item.fields.Name;
    });

    // wrapper in a try/catch as any error called from the eachPage function yields a very unclear message
    try {
      const hydratedList = resourceList.map((resource: Resource) => {
        const newFields = {
          ...resource.fields,
          extendedAuthors: resource.fields.Author?.map(
            (item: string) => authorMap[item],
          ),
          Blockchain: resource.fields.Blockchain?.map(
            (item: string) => blockchainMap[item],
          ),
          Category: resource.fields.Category?.map(
            (item: string) => categoryMap[item],
          ),
          Tag: resource.fields.Tags?.map((item: string) => tagMap[item]),
        };
        return {
          ...resource,
          fields: newFields,
        };
      });

      setResourceBaseList(hydratedList);
    } catch (e) {
      console.error(t('hydrationError'), e);
    }
  };

  return resourceBaseList;
};
