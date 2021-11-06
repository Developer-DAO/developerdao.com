import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { chakra, Text, HStack, Box, Switch, Wrap } from '@chakra-ui/react';
import PageLayout from '../layout/Page';
import KnowledgeCard from '../components/ResourceCard';
import { getAirtableResources } from '../lib/airtable';
import PropTypes from 'prop-types';
import { Resource } from '../types/airtable';

function ResourceBase(props: { resources: Resource[] }) {
  const { t } = useTranslation();
  const { resources }: { resources: Resource[] } = props;
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
            <Text>{t('noResources')}</Text>
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

ResourceBase.propTypes = {
  resources: PropTypes.array.isRequired,
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const resources = await getAirtableResources(
    process.env.AIRTABLE_KEY,
    process.env.AIRTABLE_BASE,
  );

  return {
    props: {
      resources,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: 15, // Regenerate the resources at most once per 15 seconds when a request comes in. - we can probably go longer, even
  };
};

export default ResourceBase;
