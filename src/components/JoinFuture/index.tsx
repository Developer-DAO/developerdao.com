import { Box, Grid, Text, VStack } from '@chakra-ui/layout';
import { HStack, Image } from '@chakra-ui/react';
import Feature from '../Feature';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useTranslation } from 'react-i18next';

function JoinFuture() {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');

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
    <VStack
      color={color}
      mx="auto"
      px={0}
      textAlign="center"
      mt={12}
      w="full"
      mb={4}
    >
      <Image
        mt="5.4rem"
        mb="0.5rem"
        w={10}
        h="auto"
        src="/rocket.png"
        alt="rocket"
      />
      <Text
        fontFamily="poppins"
        fontWeight="light"
        mb={[0, '0rem !important']}
        fontSize={{ base: '3xl', md: '6xl', lg: '6xl' }}
      >
        {t('future')}
      </Text>
      <Text
        px={4}
        fontWeight="400"
        fontFamily="inter"
        fontSize={{ base: '14px', md: '18px', lg: '18px' }}
        maxW={{ base: '90%', sm: '80%', md: '2xl' }}
      >
        {t('member')}
      </Text>
      <Grid
        mt={[0, '2.5rem !important']}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={4}
        w={{ base: 'full', md: '80%', lg: '90%' }}
        mx="auto"
        my={6}
        gridGap={4}
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
    </VStack>
  );
}

export default JoinFuture;
