import React, { useCallback } from 'react';
import { getDefaultProvider, Contract } from 'ethers';
import { NftProvider, useNft } from 'use-nft';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  DEVELOPER_DAO_CONTRACT,
  ETHER_SCAN_LINK_PREFIX,
  SITE_URL,
} from '../../utils/DeveloperDaoConstants';
import {
  chakra,
  Input,
  Text,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Logo from '../../components/Logo';
import PageLayout from '../../layout/Page';
import DevName from '../../components/Search/Dev/DevName';
import { useNftImageContent } from '../../utils/useNftImageContent';

const DeveloperPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const id = router.query.id;

  const ethersConfig = {
    ethers: { Contract },
    provider: getDefaultProvider('homestead'),
  };

  if (!id) {
    return null;
  }
  return (
    <PageLayout>
      <chakra.main>
        <VStack mx="auto" px={4} spacing={5} w="full" maxW="lg">
          <Logo w={32} h={32} />
          {typeof window !== 'undefined' ? (
            <NftProvider fetcher={['ethers', ethersConfig]}>
              <Nft developerId={id?.toString()!} />
            </NftProvider>
          ) : (
            <Text>{t('loading')}</Text>
          )}
        </VStack>
      </chakra.main>
    </PageLayout>
  );
};

function Nft({ developerId }: { developerId: string }) {
  const { t } = useTranslation();
  const toast = useToast();

  const copyLinkToNFT = useCallback(() => {
    navigator.clipboard.writeText(`${SITE_URL}/id/${developerId}`);
    toast({
      title: t('linkCopied'),
      isClosable: true,
    });
  }, [toast, t, developerId]);

  const { loading, error, nft } = useNft(DEVELOPER_DAO_CONTRACT, developerId);

  const [nftImage, nftAltText] = useNftImageContent(nft?.image);

  if (loading) return <Text>{t('loading')}</Text>;

  if (!developerId) return <Text>{t('enterDeveloperId')}</Text>;

  if (parseInt(developerId) > 8000) return <Text>{t('invalidToken')}.</Text>;

  if (error || !nft) return <Text>{t('invalidToken')}.</Text>;

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
        {nft.owner ? (
          <Button
            as="a"
            href={`${ETHER_SCAN_LINK_PREFIX}/${nft.owner}`}
            target="_blank"
            rel="noreferrer"
            title={t('viewOwnerEtherscan')}
            fontSize={{ base: 'xs', sm: 'md' }}
          >
            {t('owner')}:&nbsp;
            <chakra.span maxW="xs">{nft.owner.slice(0, 30)}</chakra.span>...
            {nft.owner.slice(-4)}
          </Button>
        ) : (
          <Button isDisabled>
            {t('owner')}:&nbsp;{t('unclaimed')}
          </Button>
        )}
        <Button onClick={copyLinkToNFT} leftIcon={<LinkIcon />}>
          {t('copyLinkToNFT')}
        </Button>
      </VStack>
    </VStack>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default DeveloperPage;
