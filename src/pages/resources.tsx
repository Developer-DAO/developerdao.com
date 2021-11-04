import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { chakra, Text, HStack, Box, Switch, Wrap } from '@chakra-ui/react';
import PageLayout from '../layout/Page';
import KnowledgeCard from '../components/ResourceCard';
import { useAirtableResources } from '../utils/useAirtableResources';

function ResourceBase() {
  const { t } = useTranslation();
  const resources = useAirtableResources();
  const [showAll, setShowAll] = useState(false);

  const updateListFilter = () => {
    setShowAll(!showAll);
  };

  const viewList = showAll
    ? resources
    : resources.filter((item) => item.fields.Curated);

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
