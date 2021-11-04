import React from 'react';
import { DirectMintBox } from '@/components/mintPage';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box } from '@chakra-ui/react';

const Mint = () => {
  return (
    <Box mb={20}>
      <DirectMintBox />
    </Box>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Mint;
