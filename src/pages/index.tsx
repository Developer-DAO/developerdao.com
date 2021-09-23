import React, { useCallback, useState } from 'react';
import { getDefaultProvider, Contract } from 'ethers';
import { NftProvider, useNft } from 'use-nft';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  DEVELOPER_DAO_CONTRACT,
  ETHER_SCAN_LINK_PREFIX,
  SITE_URL,
} from '../utils/DeveloperDaoConstants';
import {
  chakra,
  Input,
  Text,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { LinkIcon, SearchIcon } from '@chakra-ui/icons';
import Logo from '../components/Logo';
import PageLayout from '../layout/Page';
import DevName from '../components/Search/Dev/DevName';
import { useNftImageContent } from '../utils/useNftImageContent';

function App() {
  const { t } = useTranslation();
  const router = useRouter();
  const id = getSearchID();
  const [developerId, setDeveloperId] = useState(id);

  const ethersConfig = {
    ethers: { Contract },
    provider: getDefaultProvider('homestead'),
  };

  const updateDeveloperId = useCallback(
    (e) => {
      if (e <= 8000) {
        setDeveloperId(e);
      }
    },
    [router],
  );

  function getSearchID() {
    if (process.browser) {
      const search = window.location.search;
      const val = new URLSearchParams(search).get('id') || 1;
      return val;
    }
    return 1;
  }

  return (
    <PageLayout>
      <chakra.main>
        <VStack mx="auto" px={4} spacing={5} w="full" maxW="lg">
          <Logo w={32} h={32} />
          <VStack w="full">
            <Text fontSize="xl">{t('searchId')}</Text>
            <Input
              aria-label="Search by developer ID"
              placeholder="Search developer id"
              value={developerId}
              onChange={(e) => updateDeveloperId(e.target.value)}
              id="hero-field"
              name="hero-field"
              bg="white"
            />
            <Button
              as="a"
              href={`/id/${developerId}`}
              leftIcon={<SearchIcon />}
            >
              Search
            </Button>
          </VStack>
        </VStack>
      </chakra.main>
    </PageLayout>
  );
}

const processBase64Img = (imgStr: string) => {
  const [formatInfo, base64Str] = imgStr.split(',');

  // The smart contract includes items with unescaped "&", which breaks SVG rendering
  const processedStr = atob(base64Str).replace(' & ', ' &amp; ');

  return formatInfo + ',' + btoa(processedStr);
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default App;
