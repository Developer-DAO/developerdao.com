import { Divider, useColorMode, VStack } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../Components/Footer';
import IntroComponent from '../Components/Intro';
import Partners from '../Components/Partners';
import Values from '../Components/Values';
import { createClient } from '../../prismicio';

export default function IndexPage({ page }: { page: any }) {
  const { colorMode } = useColorMode();
  console.log('page.data.slices', page.data.slices);
  const [heroSlices] = page.data.slices
    .map((slice: any) => slice)
    .filter((slice: { slice_type: any }) => slice.slice_type === 'hero_text')
    .map(({ primary }: { primary: any }) => primary);

  const [valueSlices] = page.data.slices
    .map((slice: any) => slice)
    .filter((slice: { slice_type: any }) => slice.slice_type === 'values')
    .map(({ items }: { items: any }) => items);

  const [missionSlices] = page.data.slices
    .map((slice: any) => slice)
    .filter((slice: { slice_type: any }) => slice.slice_type === 'mission_text')
    .map(({ items }: { items: any }) => items);

  const [partnerSlices] = page.data.slices
    .map((slice: any) => slice)
    .filter((slice: { slice_type: any }) => slice.slice_type === 'partners')
    .map(({ items }: { items: any }) => items);

  const missionAnddvalues = {
    mission: {
      ...missionSlices,
    },
    values: {
      ...valueSlices,
    },
  };

  return (
    <VStack w="full" justify="center" spacing={4}>
      <IntroComponent page={heroSlices} />
      <Values page={missionAnddvalues} />
      <Partners page={partnerSlices} />
      <Divider
        w="full"
        size="1px"
        color={colorMode === 'dark' ? '#ffffff' : '#000000'}
      />
      <Footer />
    </VStack>
  );
}

export async function getStaticProps({
  previewData,
  locale,
}: {
  previewData: string;
  locale: string;
}) {
  const client = createClient({ previewData });

  const page = await client.getSingle('00-home-page', { lang: 'fr-fr' });
  const all = await client.dangerouslyGetAll();
  console.log('all', all);

  return {
    props: {
      page,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
