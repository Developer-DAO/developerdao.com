import React, { useState } from 'react';
import { NftMetadata } from 'use-nft';
import { useTranslation } from 'react-i18next';
import { Flex, Link, Text } from '@chakra-ui/react';

import { Contract } from 'ethers';
import { useEffect } from 'react';
import { SITE_URL } from '@/utils/DeveloperDaoConstants';

const cache: { [key: string]: number[] } = {};

function OtherDevsByOwnerContainer({
  nft,
  contract,
}: {
  nft: NftMetadata;
  contract: Contract;
}) {
  const [otherDevs, setOtherDevs] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function onMount(addr?: string) {
      if (addr && contract) {
        setLoading(true);
        const _otherDevs: number[] =
          cache[nft.owner] || (await fetchOtherDevsForAddr(nft.owner));
        setOtherDevs(_otherDevs);
        setLoading(false);
      }
    }
    async function fetchOtherDevsForAddr(ownerAddr: string) {
      const ownerTokenCount = parseInt(
        await contract.functions.balanceOf(ownerAddr),
      );
      const indexes = Array.from({ length: ownerTokenCount }, (_, k) => k);
      const tokens = await Promise.all(
        indexes.map(async (i) =>
          parseInt(await contract.functions.tokenOfOwnerByIndex(ownerAddr, i)),
        ),
      );
      tokens.sort();

      cache[ownerAddr] = tokens;
      return tokens;
    }
    onMount(nft?.owner);
  }, [nft, contract]);
  return (
    <OtherDevsByOwner
      otherDevs={otherDevs}
      loading={loading}
      currentDevName={nft.name}
      data-testid="otherDevs"
    />
  );
}

export function OtherDevsByOwner({
  otherDevs,
  loading,
  currentDevName,
}: {
  otherDevs: number[];
  loading: boolean;
  currentDevName: string;
}) {
  const { t } = useTranslation();

  if (loading) return <Text>{t('loading')}</Text>;
  else if (otherDevs.length === 1)
    return <Text fontSize="xs">{t('noOtherTokens')}</Text>;
  else if (otherDevs.length > 1) {
    return (
      <>
        <Text mt={12} fontWeight="bold">
          {t('otherTokensOwnedByThisAddress')} ({otherDevs.length - 1})
        </Text>
        <Flex align="center" justify="center" wrap="wrap" w="100%">
          {otherDevs.map(
            (dev) =>
              currentDevName !== `Dev #${dev}` && (
                <Link
                  rel="noreferrer"
                  fontSize="sm"
                  key={dev}
                  m={1}
                  href={`${SITE_URL}/?id=${dev}`}
                >
                  #{dev}
                </Link>
              ),
          )}
        </Flex>
      </>
    );
  } else {
    return <></>;
  }
}
export default OtherDevsByOwnerContainer;
