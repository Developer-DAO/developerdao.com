import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsFillLightningChargeFill, BsDiscord } from 'react-icons/bs';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

const beforeCODELaunch = true;

const IntroComponent = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
  return (
    <Box w={'90vw'}>
      <Flex
        direction="row"
        justify="space-around"
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
      >
        {beforeCODELaunch && (
          <Box
            w={{ base: '24rem', xl: '36rem' }}
            border="1px solid"
            borderRadius="11px"
            p="2rem"
          >
            <Text
              fontSize={isMobile ? '2.625rem' : '3.375rem'}
              fontFamily="Inter"
              fontWeight="800"
              lineHeight={isMobile ? '2.625rem' : '4rem'}
              mr="2rem"
            >
              Build web3 with friends.
            </Text>
            <Text
              fontSize={isMobile ? '1rem' : '1.5rem'}
              fontFamily="Inter"
              fontWeight="500"
              lineHeight={isMobile ? '1.25rem' : '1.875rem'}
              mt="2rem"
            >
              Developer DAO is a community of thousand of web3 builders creating
              a better internet. Join us and create the future.
            </Text>
            <Box
              border="1px solid"
              borderRadius="0.75rem"
              bg="white"
              p="1rem"
              mt="2rem"
            >
              <Text
                fontSize={isMobile ? '1rem' : '1.5rem'}
                fontFamily="Inter"
                fontWeight="700"
                color="black"
              >
                Current Status: Season 0
              </Text>
              <Text
                fontSize={isMobile ? '0.8rem' : '1.25rem'}
                fontFamily="Inter"
                fontWeight="500"
                color="black"
                lineHeight={isMobile ? '1.125rem' : '1.75rem'}
                mt="1rem"
              >
                We&rsquo;re forming guilds, creating culture, strengthening our
                community, teaching & learning, and building cool things
                together.
              </Text>
              <Button
                mt="1rem"
                p={isMobile ? '1rem' : '1.5rem'}
                border="1px solid black"
                borderRadius={isMobile ? '0.438rem' : '0.688rem'}
                fontSize={isMobile ? '0.75rem' : '1.25rem'}
                color={'black'}
              >
                <Box as={BsFillLightningChargeFill} />
                Read our snapshot
              </Button>
            </Box>
          </Box>
        )}

        {!beforeCODELaunch && (
          <Box w={{ base: '90vw', xl: '35rem' }}>
            <Text
              fontSize={isMobile ? '3.563rem' : '5.375rem'}
              fontFamily="Inter"
              fontWeight="800"
              lineHeight={isMobile ? '4.375rem' : '6.5rem'}
            >
              Build web3 with friends.
            </Text>
            <Text
              fontSize={isMobile ? '1.25rem' : '1.5rem'}
              fontFamily="Inter"
              fontWeight="500"
              lineHeight={isMobile ? '1.75rem' : '1.813rem'}
              mt="2rem"
            >
              Developer DAO is a community of thousand of web3 builders creating
              a better internet. Join us and create the future.
            </Text>

            <Flex justifyContent="center" w="100" mt="2rem">
              <Button
                p="1.5rem"
                border="1px solid black"
                borderRadius="0.625rem"
                bg="white"
                color="black"
                fontSize={isMobile ? '0.875rem' : '1.25rem'}
                flexGrow="1"
              >
                Claim $CODE
              </Button>

              <Button
                p="1.5rem"
                ml="1rem"
                border="1px solid white"
                borderRadius="0.625rem"
                bg="black"
                color="white"
                fontSize={isMobile ? '0.875rem' : '1.25rem'}
                flexGrow="1"
              >
                <Box as={BsDiscord} mr="1rem" />
                Join Discord
              </Button>
            </Flex>
          </Box>
        )}
        <Flex
          direction="column"
          w={{ base: '90vw', xl: '30rem' }}
          mt={{ base: '10vh', xl: '0vh' }}
        >
          <Image
            alignSelf="end"
            h="1.875rem"
            src="/intro_person_top.svg"
            alt="intro_person_top"
          />
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            mt="2rem"
          >
            <GridItem justifySelf="center">
              <Image
                src="/intro_person_1.svg"
                alt="intro_person_1"
                w={isMobile ? '9.5rem' : '20rem'}
                objectFit="fill"
              />
            </GridItem>
            <GridItem justifySelf="center">
              <Image
                src="/intro_person_2.svg"
                alt="intro_person_2"
                w={isMobile ? '9.5rem' : '19.75rem'}
                objectFit="fill"
              />
            </GridItem>
            <GridItem justifySelf="center">
              <Image
                src="/intro_person_3.svg"
                alt="intro_person_3"
                w={isMobile ? '9.5rem' : '19.75re'}
                objectFit="contain"
              />
            </GridItem>
            <GridItem justifySelf="center">
              <Image
                src="/intro_person_4.svg"
                alt="intro_person_4"
                w={isMobile ? '7.8rem' : '12rem'}
                objectFit="contain"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default IntroComponent;
