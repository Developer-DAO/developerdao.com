import { Divider, useColorMode, VStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../Components/Footer';
import IntroComponent from '../Components/Intro';
import Partners from '../Components/Partners';
import Values from '../Components/Values';

export default function IndexPage() {
  const { colorMode } = useColorMode();

  return (

    <VStack w="full" justify="center" spacing={4}>
      <IntroComponent />
      <Values />
      <Partners />
      <Divider
        w="full"
        size="1px"
        color={colorMode === 'dark' ? '#ffffff' : '#000000'}
      />
      <Footer />
    </VStack>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
