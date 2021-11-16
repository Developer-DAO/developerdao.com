import { Box, Grid, Text, VStack } from '@chakra-ui/layout';
import { HStack, Image } from '@chakra-ui/react';
import Feature from '../Feature';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useTranslation } from 'react-i18next';
import SuperButton from '../SuperButton';
import { FaEthereum } from 'react-icons/fa';

function JoinFuture() {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');
  const secondaryColor = useColorModeValue(
    'rgba(15, 15, 26, 0.48)',
    'rgba(255, 255, 255, 0.64)',
  );

  const Features = [
    {
      imgSrc: '/access.svg',
      title: 'Private Discord access',
      description:
        'Engage directly with (800+) active members that includes Web3 founders, team members from Ethereum/Polygon foundations, major open source project maintainers and many other passionate/talented folk in Web3.',
    },
    {
      imgSrc: '/lightning.svg',
      title: 'Ownership & voting rights',
      description:
        'Own what you help to build via our upcoming $DBUCKS token launch with fair allocation based on each persons contributions to the community.',
    },
    {
      imgSrc: '/add.svg',
      title: 'Learning & support',
      description:
        'Active discussion and support channels for Solidity, Solana, Polkadot, dApps plus Web3 learning resources organised by the community.',
    },
    {
      imgSrc: '/events.svg',
      title: 'Events',
      description:
        'Join in with community events either just to learn and connect or help build your personal brand.',
    },
  ];

  return (
    <VStack spacing={6} color={color} mx="auto" textAlign="center" w="full">
      <VStack>
        <Image w={10} h="auto" src="/rocket.png" alt="rocket" />
        <Text
          fontFamily="poppins"
          fontWeight="light"
          fontSize={{ base: '3xl', md: '6xl', lg: '6xl' }}
        >
          {t('future')}
        </Text>
        <Text
          px={4}
          fontWeight="400"
          color={secondaryColor}
          fontFamily="inter"
          fontSize={{ base: '14px', md: '18px', lg: '18px' }}
          maxW={{ base: '90%', sm: '80%', md: '2xl' }}
        >
          {t('member')}
        </Text>
      </VStack>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={4}
        w={{ base: 'full', md: '80%', lg: '90%' }}
        justifyItems="center"
        mx="auto"
      >
        {Features.map((feature, index) => (
          <Feature
            key={index}
            imgSrc={feature.imgSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </Grid>
      <SuperButton
        title={t('becomeMember')}
        background="member"
        leftIcon={<FaEthereum />}
      />
    </VStack>
  );
}

export default JoinFuture;
