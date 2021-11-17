import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  chakra,
  Text,
  HStack,
  Box,
  Switch,
  Wrap,
  Heading,
  VStack,
} from '@chakra-ui/react';
import PageLayout from '../layout/Page';
import ResourceCard from '../components/ResourceCard';
import { getAirtableResources } from '../lib/airtable';
import PropTypes from 'prop-types';
import { Resource } from '../types/airtable';

function ResourceBase(props: { resources: Resource[] }) {
  const { t } = useTranslation();
  const { resources }: { resources: Resource[] } = props;

  const viewList = resources.filter((item) => item.fields.Curated);
  const beginnerList = viewList.filter(
    (item) => item.fields.Level === 'Beginner',
  );
  const intermediateList = viewList.filter(
    (item) => item.fields.Level === 'Intermediate',
  );
  const expertList = viewList.filter(
    (item) => item.fields.Level === 'Advanced',
  );

  return (
    <PageLayout>
      <chakra.main>
        <Box>
          {viewList.length === 0 ? (
            <Text>{t('noResources')}</Text>
          ) : (
            <VStack spacing="1em">
              <Heading align="center">
                {t('beginner') + ' ' + t('resources')}
              </Heading>
              <Wrap spacing={8} justify="center">
                {beginnerList.map((item, index) => (
                  <ResourceCard key={index} data={item} />
                ))}
              </Wrap>

              <Heading align="center">
                {t('intermediate') + ' ' + t('resources')}
              </Heading>
              <Wrap spacing={8} justify="center">
                {intermediateList.map((item, index) => (
                  <ResourceCard key={index} data={item} />
                ))}
              </Wrap>

              <Heading align="center">
                {t('advanced') + ' ' + t('resources')}
              </Heading>
              <Wrap spacing={8} justify="center">
                {expertList.map((item, index) => (
                  <ResourceCard key={index} data={item} />
                ))}
              </Wrap>
            </VStack>
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
