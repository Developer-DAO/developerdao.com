import React, { useCallback, useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  chakra,
  Input,
  Text,
  Button,
  HStack,
  VStack,
  useToast,
  Box,
  Switch,
  Wrap,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Logo from '../components/Logo';
import PageLayout from '../layout/Page';
import Airtable from 'airtable';
import KnowledgeCard from '../components/ResourceCard';
import {
  AIRTABLE_READONLY_KEY,
  AIRTABLE_RESOURCE_BASE,
} from '../utils/DeveloperDaoConstants';
import { Author, Blockchain, Category, Resource, Tag } from '../types/airtable';

function ResourceBase() {
  const { t } = useTranslation();
  const [airbase, setAirbase] = useState('Resources');
  const [airtable, setAirtable] = useState<Airtable>();
  const [resourceBaseList, setResourceBaseList] = useState<Resource[]>([]);
  const [showAll, setShowAll] = useState(false);
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
    const resourceFunctor = airtable.base(airbase);
    // local variables to not start throwing state into a mess with the callbacks in each select
    let authorList: Author[] = [];
    let blockchainList: Blockchain[] = [];
    let categoryList: Category[] = [];
    let resourceList: Resource[] = [];
    let tagList: Tag[] = [];

    resourceFunctor('Author')
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
    resourceFunctor('Blockchain')
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
    resourceFunctor('Category')
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
    resourceFunctor('Resource')
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
    resourceFunctor('Tags')
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

  const updateListFilter = () => {
    setShowAll(!showAll);
  };

  const viewList = showAll
    ? resourceBaseList
    : resourceBaseList.filter((item) => item.fields.Curated);

  return (
    <PageLayout>
      <chakra.main>
        <HStack>
          <Text>{t('curatedResources')}</Text>
          <Switch isChecked={showAll} onChange={updateListFilter} />
          <Text>{t('allResources')}</Text>
        </HStack>
        <Box>
          {viewList.length === 0 ? (
            <Text>No Records</Text>
          ) : (
            <Wrap spacing={8} justify="center">
              {viewList.map((item, index) => (
                <KnowledgeCard key={index} data={item} />
              ))}
            </Wrap>
          )}
        </Box>
      </chakra.main>
    </PageLayout>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default ResourceBase;
