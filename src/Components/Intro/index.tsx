import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

const codeLaunched = true;

const IntroComponent = () => {
  const isMobile = useBreakpointValue({ base: true, xl: false });
  const isXl = useBreakpointValue({ base: false, xl: false, '2xl': true });
  return (
    <Flex
      direction={isMobile ? 'column' : 'row'}
      justifyContent="space-between"
      pt="4.5rem"
      w="100%"
    >
      {!codeLaunched && (
        <Box
          w={{ base: '24rem', xl: '36rem' }}
          border="1px solid"
          borderRadius="11px"
          p="2rem"
        >
          <Box pr="4rem">
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
          </Box>
          <Box
            border="1px solid"
            borderRadius="0.75rem"
            bg="white"
            py="1.25rem"
            px="1.5rem"
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
              community, teaching & learning, and building cool things together.
            </Text>
            <Button
              mt="1rem"
              pl={isMobile ? '1rem' : '1rem'}
              pr={isMobile ? '1rem' : '1.2rem'}
              py={isMobile ? '1rem' : '1.5rem'}
              border="1px solid black"
              borderRadius={isMobile ? '0.438rem' : '0.688rem'}
              fontSize={isMobile ? '0.75rem' : '1.25rem'}
              fontWeight="bold"
              color={'black'}
            >
              <Box as={BsFillLightningChargeFill} mr=".5rem" color="#FFD666" />
              Read our snapshot
            </Button>
          </Box>
        </Box>
      )}

      {codeLaunched && (
        <Box w={{ base: '100%', xl: '35rem' }}>
          <Text
            fontSize={isMobile ? '3.3rem' : '5.375rem'}
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
            lineHeight={isMobile ? '1.75rem' : '1.5'}
            mt="2.5rem"
          >
            Developer DAO is a community of thousand of web3 builders creating a
            better internet. Join us and create the future.
          </Text>

          <Flex justifyContent="center" w="100" mt="3rem">
            <Button
              px="1.5rem"
              py={{ base: '1.75rem', xl: '2rem' }}
              border="1px solid black"
              borderRadius="0.625rem"
              bg="white"
              color="black"
              fontSize={isMobile ? '0.875rem' : '1.25rem'}
              flexGrow={1}
              _hover={{
                bg: 'black',
                color: 'white',
              }}
            >
              Claim $CODE
            </Button>

            <Button
              px="1.5rem"
              py={{ base: '1.75rem', xl: '2rem' }}
              ml={{ base: '1.25rem', xl: '2rem' }}
              border="1px solid white"
              borderRadius="0.625rem"
              bg="black"
              color="white"
              fontSize={isMobile ? '0.875rem' : '1.25rem'}
              flexGrow={1}
              _hover={{
                bg: 'white',
                color: 'black',
                borderColor: 'black',
              }}
            >
              <Box as={FaDiscord} mr=".75rem" fontSize="2rem" />
              Join Discord
            </Button>
          </Flex>
        </Box>
      )}
      <Flex
        direction="column"
        maxWidth={{ base: 'none', xl: '45%', '2xl': 'none' }}
        mx={{ base: 'auto', xl: '0' }}
        mt={{ base: '10rem', xl: 0 }}
        mb={{ base: '2rem', xl: 0 }}
        style={{
          transform: isMobile ? 'translateY(0)' : 'translateY(-20px)',
        }}
      >
        <Image
          h={{ base: '2rem', xl: '2.6875rem' }}
          alignSelf="end"
          src="/intro_person_top.svg"
          alt="intro_person_top"
          mr={{ base: '5rem', xl: '7.75rem' }}
        />
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          columnGap={10}
          rowGap={20}
          mt="2rem"
          w={{ base: '80vw', xl: 'auto' }}
        >
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_1.svg"
              alt="intro_person_1"
              w={{ base: '15rem', xl: '17rem', '2xl': '19.75rem' }}
              transition=".3s"
              style={{
                transform: isMobile ? 'translateX(0)' : 'translateX(-100px)',
              }}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_2.svg"
              alt="intro_person_2"
              w={{ base: '15rem', xl: '17rem', '2xl': '19.75rem' }}
              transition=".3s"
              style={{ transform: 'translateY(30px)' }}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_3.svg"
              alt="intro_person_3"
              transition=".3s"
              w={{ base: '15rem', xl: '17rem', '2xl': '19.75rem' }}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_4.svg"
              alt="intro_person_4"
              transition=".3s"
              w={{ base: '12rem', xl: '13rem', '2xl': '15.75rem' }}
              style={{ transform: 'translate(-30px, 30px)' }}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default IntroComponent;
