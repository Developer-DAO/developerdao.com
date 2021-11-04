import * as React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  useColorModeValue,
  chakra,
  Flex,
} from '@chakra-ui/react';
import { SiEthereum, SiDiscord } from 'react-icons/si';
import { TweetCarousel } from '..';
export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  const accentColor = useColorModeValue('gray.500', 'gray.400');
  return (
    <Box as="section" pt="2rem" pb={{ base: '0', md: '5rem' }}>
      <Container maxW={'3xl'}>
        <Box
          textAlign={{ base: 'center', md: 'center' }}
          pt={40}
          pb={{ base: 20, md: 36 }}
        >
          <chakra.h1
            fontSize={{ base: '5xl', md: '4.375rem' }}
            fontWeight="extrabold"
            lineHeight={{ base: '1.2', md: '1.1' }}
            letterSpacing={{ base: '-0.03em', md: '-0.05em' }}
          >
            Developers Meet web3
          </chakra.h1>

          <Text
            maxW="560px"
            mx="auto"
            color={accentColor}
            fontSize={{ base: 'lg', lg: 'xl' }}
            mt="6"
          >
            <b>Developer Dao</b> is a place to explore what can be achieved when
            talent and like-minded people are brought together to build the next
            web
          </Text>
          <Stack
            mt="10"
            spacing="4"
            justify="center"
            direction={{ base: 'column', sm: 'row' }}
          >
            <Box>
              <Text fontSize="4rem">
                120<sup style={{ fontSize: '1rem', top: -30 }}>/800</sup>
              </Text>
              <Text fontSize="1rem" mb="4" color={accentColor}>
                seats left
              </Text>
              <Button
                leftIcon={<SiEthereum />}
                color="white"
                bg="#2128ca"
                _hover={{
                  bg: '#0409b0',
                }}
                w="100%"
                size="lg"
              >
                Become A Member
              </Button>
            </Box>
            <Box>
              <Text fontSize="4rem">853</Text>
              <Text fontSize="1rem" mb="4" color={accentColor}>
                devs building
              </Text>
              <Button
                leftIcon={<SiDiscord size={'1.5em'} />}
                backgroundColor="#3F46F3"
                _hover={{
                  bg: '#4352f7',
                }}
                color="white"
                w="100%"
                size="lg"
              >
                join us at discord
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
      <TweetCarousel />
    </Box>
  );
}
