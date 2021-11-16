import {
  Badge,
  Box,
  Container,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useWindowSize } from '@react-hook/window-size';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Logo from '../../components/Logo';
import { useDevNFTSupply } from '../../hooks/useDevNFTSupply';
import {
  DEVELOPER_DAO_CONTRACT_NETWORK,
  TOKEN_FINDER_URL,
} from '../../utils/DeveloperDaoConstants';
import DirectMint from './DirectMint';

const Celebration = () => {
  const [width, height] = useWindowSize();
  const [isRunning, setIsRunning] = useState(true);
  const isSSR = typeof window !== 'undefined';

  useEffect(() => {
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  }, []);

  return isSSR ? (
    <Confetti
      numberOfPieces={300}
      colors={['gold', 'silver']}
      width={width}
      height={height}
      recycle={isRunning}
    />
  ) : null;
};

// Layout for the Direct Mint Box
// used on the minting page
const DirectMintBox = () => {
  const { t } = useTranslation();
  const { isLoading, remainingPublicSupply, uniqueTokenHolders } =
    useDevNFTSupply();
  const isSoldOut = isLoading ? false : remainingPublicSupply === 0;

  return (
    <>
      <Container maxW="container.md" centerContent>
        <Box
          borderWidth="4px"
          borderRadius="lg"
          w={{ base: '75%', s: '90%' }}
          padding={isSoldOut ? 10 : 20}
        >
          <Stack spacing={6} align="center">
            <Logo w={52} h={52} />
            {DEVELOPER_DAO_CONTRACT_NETWORK === 'rinkeby' && (
              <Badge colorScheme="orange">{t('testnet')}</Badge>
            )}
            <Heading fontSize={{ base: '1.25rem', sm: '2rem' }}>
              {t('mintPageHeader')}
            </Heading>
            {isSoldOut ? (
              <>
                <Box maxW="350px">
                  <Image
                    src="/glitter-confetti.gif"
                    alt={t('glitterConfetti')}
                    width={429}
                    height={350}
                  />
                </Box>
                <Container>
                  <Text fontSize="2xl" align="center">
                    🎉{' '}
                    {/* @ts-expect-error unsure how to type the options argument */}
                    {t('soldOut', {
                      count: uniqueTokenHolders?.toLocaleString() ?? '...',
                    })}
                    ! 🎉
                  </Text>
                </Container>
                <Celebration />
              </>
            ) : (
              <>
                <Text fontSize={{ base: 'xs', sm: 'xl' }}>
                  {t('availableTokensText')}{' '}
                  <Link color="#3182ce" href={TOKEN_FINDER_URL} isExternal>
                    {t('here')}
                  </Link>
                </Text>
                <Text fontSize={{ base: 'xs', sm: 'xl' }}>
                  {t('remainingTokensText', {
                    remainingTokens: isLoading
                      ? '...'
                      : remainingPublicSupply.toLocaleString(),
                    uniqueAddressCount: isLoading
                      ? '...'
                      : uniqueTokenHolders?.toLocaleString(),
                  })}
                </Text>
                <DirectMint />
              </>
            )}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default DirectMintBox;
