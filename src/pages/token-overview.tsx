import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '../layout/Page';
import { chakra } from '@chakra-ui/react';
import { TokenList } from '../components/TokenList';

const TokenOverviewPage = () => {
  return (
    <>
      <PageLayout>
        <chakra.main>
          <TokenList />
        </chakra.main>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default TokenOverviewPage;
