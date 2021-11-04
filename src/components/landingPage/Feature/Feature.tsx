import * as React from 'react';
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Container,
  chakra,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { FcCalendar, FcSms, FcFlashOn, FcGraduationCap } from 'react-icons/fc';
export interface IFeatureProps {}
interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

const FeatureTitle = (props: FeatureProps) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: '3', md: '6' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default function Feature(props: IFeatureProps) {
  return (
    <Box as="section" maxW="5xl" mx="auto">
      <Container py="120px" maxW="1280px">
        <Box maxW="760px" mx="auto" textAlign="center" mb="56px">
          <chakra.h2 textStyle="heading" mb="5">
            Join the Future
          </chakra.h2>
          <chakra.p opacity={0.7} fontSize="lg">
            Becoming a D_D member comes with benefits.
          </chakra.p>
        </Box>
        <SimpleGrid
          px={{ base: '6', md: '8' }}
          columns={{ base: 1, md: 2 }}
          spacingX="10"
          spacingY={{ base: '8', md: '14' }}
        >
          <FeatureTitle title="Private Discord access" icon={<FcSms />}>
            Engage directly with (800+) active members that includes Web3
            founders, team members from Ethereum/Polygon foundations, major open
            source project maintainers and many other passionate/talented folks
            in web3.
          </FeatureTitle>
          <FeatureTitle title="Ownership & voting rights" icon={<FcFlashOn />}>
            Own what you help to build via our upcoming $DBUCKS token launch
            with fair allocation based on each persons contributions to the
            community.
          </FeatureTitle>
          <FeatureTitle title="Learning & support" icon={<FcGraduationCap />}>
            Active discussion and support channels for Solidity, Solana,
            Polkadot, Dapps plus Web3 learning resources organized by the
            community.
          </FeatureTitle>
          <FeatureTitle title="Events" icon={<FcCalendar />}>
            Join in with community events either just to learn and connect or
            help build your personal brand
          </FeatureTitle>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
