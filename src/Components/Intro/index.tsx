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

const beforeCODELaunch = false;

const IntroComponent = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Box w={'100vw'}>
      <Flex direction="row" justify="space-around" flexWrap="wrap">
        {beforeCODELaunch && (
          <Box
            w={{ base: '90vw', lg: '31rem' }}
            border="1px solid"
            borderRadius="11px"
            p="2rem"
          >
            <Text
              fontSize={isMobile ? '43px' : '54px'}
              fontFamily="Inter"
              fontWeight="800"
              lineHeight={isMobile ? '43px' : '65px'}
              mr="2rem"
            >
              Build web3 with friends.
            </Text>
            <Text
              fontSize={isMobile ? '16px' : '24px'}
              fontFamily="Inter"
              fontWeight="500"
              lineHeight={isMobile ? '20px' : '30px'}
              mt="2rem"
            >
              Developer DAO is a community of thousand of web3 builders creating
              a better internet. Join us and create the future.
            </Text>
            <Box
              border="1px solid"
              borderRadius="11px"
              bg="white"
              p="1rem"
              mt="2rem"
            >
              <Text
                fontSize={isMobile ? '16px' : '24px'}
                fontFamily="Inter"
                fontWeight="700"
                color="black"
              >
                Current Status: Season 0
              </Text>
              <Text
                fontSize={isMobile ? '13px' : '20px'}
                fontFamily="Inter"
                fontWeight="500"
                color="black"
                lineHeight={isMobile ? '18px' : '27px'}
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
                borderRadius={isMobile ? '7px' : '11px'}
                fontSize={isMobile ? '13px' : '20px'}
                color={'black'}
              >
                <Box as={BsFillLightningChargeFill} />
                Read our snapshot
              </Button>
            </Box>
          </Box>
        )}

        {!beforeCODELaunch && (
          <Box w={{ base: '90vw', lg: '35rem' }}>
            <Text
              fontSize={isMobile ? '57px' : '86px'}
              fontFamily="Inter"
              fontWeight="800"
              lineHeight={isMobile ? '70px' : '104px'}
            >
              Build web3 with friends.
            </Text>
            <Text
              fontSize={isMobile ? '19px' : '24px'}
              fontFamily="Inter"
              fontWeight="500"
              lineHeight={isMobile ? '28px' : '29px'}
              mt="2rem"
            >
              Developer DAO is a community of thousand of web3 builders creating
              a better internet. Join us and create the future.
            </Text>

            <Flex justifyContent="center" w="100" mt="2rem">
              <Button
                p="1.5rem"
                border="1px solid black"
                borderRadius="10px"
                bg="white"
                color="black"
                fontSize={isMobile ? '14px' : '20px'}
                flexGrow="1"
              >
                Claim $CODE
              </Button>

              <Button
                p="1.5rem"
                ml="1rem"
                border="1px solid white"
                borderRadius="10px"
                bg="black"
                color="white"
                fontSize={isMobile ? '14px' : '20px'}
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
          w={{ base: '90vw', lg: '40rem' }}
          mt={{ base: '10vh', lg: '0vh' }}
        >
          <Image
            alignSelf="end"
            h="30px"
            src="/intro_person_top.svg"
            alt="intro_person_top"
          />
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem>
              <Center>
                <Image
                  src="/intro_person_1.svg"
                  alt="intro_person_1"
                  boxSize="200px"
                  objectFit="fill"
                />
              </Center>
            </GridItem>
            <GridItem>
              <Center>
                <Image
                  src="/intro_person_2.svg"
                  alt="intro_person_2"
                  boxSize="200px"
                  objectFit="fill"
                />
              </Center>
            </GridItem>
            <GridItem>
              <Center>
                <Image
                  src="/intro_person_3.svg"
                  alt="intro_person_3"
                  boxSize="200px"
                  objectFit="fill"
                />
              </Center>
            </GridItem>
            <GridItem>
              <Center>
                <Image
                  src="/intro_person_4.svg"
                  alt="intro_person_4"
                  boxSize="200px"
                  objectFit="fill"
                />
              </Center>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default IntroComponent;
