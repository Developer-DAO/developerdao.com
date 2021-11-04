import { Feature, Hero } from '@/components/landingPage';
import { Box, Divider } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box mb={20}>
      <Hero />
      <Divider />
      <Feature />
    </Box>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
