import React, { useCallback, useState } from 'react';
import { getDefaultProvider, Contract, ethers } from 'ethers';
import { NftProvider, useNft } from 'use-nft';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { DEVELOPER_DAO_CONSTANTS } from '@/constants';
import {
  chakra,
  Input,
  Text,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Logo from '@/components/Logo';
import PageLayout from '@/layout/Page';
import DevName from '@/components/Search/Dev/DevName';
import { useNftImageContent } from '@/utils/useNftImageContent';
import OtherDevsByOwnerContainer from '@/components/Search/OtherDevsByOwner/OtherDevsByOwner';

const {
  DEVELOPER_DAO_CONTRACT,
  DEVELOPER_DAO_CONTRACT_ABI,
  ETHER_SCAN_LINK_PREFIX,
  SITE_URL,
} = DEVELOPER_DAO_CONSTANTS;

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
        router.replace({ query: { id: e } });
      }
    },
    [router],
  );

  function getSearchID() {
    if (process.browser) {
      const search = window.location.search;
      return new URLSearchParams(search).get('id') || 1;
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
          </VStack>
          {typeof window !== 'undefined' ? (
            <NftProvider fetcher={['ethers', ethersConfig]}>
              <Nft developerId={developerId.toString()} />
            </NftProvider>
          ) : (
            <Text>{t('loading')}</Text>
          )}
        </VStack>
      </chakra.main>
    </PageLayout>
  );
}

function Nft({ developerId }: { developerId: string }) {
  const { t } = useTranslation();

  const toast = useToast();

  const copyLinkToNFT = useCallback(() => {
    navigator.clipboard.writeText(`${SITE_URL}/?id=${developerId}`);
    toast({
      title: t('linkCopied'),
      isClosable: true,
    });
  }, [toast, t, developerId]);

  const { loading, error, nft } = useNft(DEVELOPER_DAO_CONTRACT, developerId);

  const [nftImage, nftAltText] = useNftImageContent(nft?.image);

  if (loading) return <Text>{t('loading')}</Text>;

  if (!developerId) return <Text>{t('enterDeveloperId')}</Text>;

  if (error || !nft) return <Text>{t('error')}.</Text>;

  return (
    <VStack w="full" spacing={5}>
      <chakra.img
        alt={nftAltText!}
        src={nftImage!}
        border={4}
        borderStyle="solid"
        borderColor="gray.200"
        w="full"
        objectFit="cover"
        objectPosition="center"
        rounded="md"
      />
      <VStack>
        <DevName nft={nft} developerId={developerId} />
        <Button onClick={copyLinkToNFT} leftIcon={<LinkIcon />}>
          {t('copyLinkToNFT')}
        </Button>
        {nft.owner ? (
          <Button
            as="a"
            href={`${ETHER_SCAN_LINK_PREFIX}/${nft.owner}`}
            target="_blank"
            rel="noreferrer"
            title={t('viewOwnerEtherscan')}
            fontSize={{ base: 'xs', sm: 'md' }}
          >
            {t('owner')}&nbsp;
            <chakra.span maxW="xs">{nft.owner.slice(0, 30)}</chakra.span>...
            {nft.owner.slice(-4)}
          </Button>
        ) : (
          <Button isDisabled>
            {t('owner')}&nbsp;{t('unclaimed')}
          </Button>
        )}
        <OtherDevsByOwnerContainer
          nft={nft}
          contract={
            new ethers.Contract(
              DEVELOPER_DAO_CONTRACT,
              DEVELOPER_DAO_CONTRACT_ABI,
              getDefaultProvider('homestead'),
            )
          }
        ></OtherDevsByOwnerContainer>
      </VStack>
    </VStack>
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
