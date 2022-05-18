import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';

const codeLaunched = false;

const IntroComponent = () => {
  const { colorMode } = useColorMode();
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImages(true);
    }, 1000);
  }, []);

  return (
    <Flex
      flexDirection={{ base: 'column', lg: 'row' }}
      justifyContent="space-between"
      pt={{ base: '0', lg: '4.5rem' }}
      pb="5rem"
      w="100%"
    >
      {!codeLaunched && (
        <Box
          w={{ base: '100%', xl: '40%' }}
          minW={{ base: '0', xl: '34rem' }}
          margin={{ lg: '0.75rem' }}
          border="1px solid"
          borderRadius="11px"
          p="2rem"
        >
          <Box pr="4rem">
            <Text
              fontFamily="Inter"
              fontWeight="800"
              mr="2rem"
              fontSize={{ base: '2.625rem', xl: '3.375rem' }}
              lineHeight={{ base: '2.625rem', xl: '4rem' }}
            >
              Build web3 with friends.
            </Text>
            <Text
              fontFamily="Inter"
              fontWeight="500"
              mt="2rem"
              lineHeight="1.5"
              fontSize={{ base: '1.25rem', xl: '1.5rem' }}
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
              fontFamily="Inter"
              fontWeight="700"
              color="black"
              fontSize={{ base: '1rem', xl: '1.5rem' }}
            >
              Current Status: Season 0
            </Text>
            <Text
              fontFamily="Inter"
              fontWeight="500"
              color="black"
              mt="1rem"
              fontSize={{ base: '0.8rem', xl: '1.25rem' }}
              lineHeight={{ base: '1.125rem', xl: '1.75rem' }}
            >
              We&rsquo;re forming guilds, creating culture, strengthening our
              community, teaching & learning, and building cool things together.
            </Text>
            <Button
              mt="1rem"
              pl="1rem"
              border="1px solid black"
              fontWeight="bold"
              color={colorMode === 'dark' ? 'black' : 'white  '}
              backgroundColor={colorMode === 'dark' ? 'white' : 'black'}
              pr={{ base: '1rem', xl: '1.2rem' }}
              py={{ base: '1rem', xl: '1.5rem' }}
              borderRadius={{ base: '.438rem', xl: '0.688rem' }}
              fontSize={{ base: '0.75rem', xl: '1.25rem' }}
              onClick={() => {
                window.open(
                  'https://developerdao.notion.site/How-to-use-Snapshot-32692309faf446ddb2a898f22050fb5f#05f55b4052c044169402a443b36945ff',
                  '_blank',
                );
              }}
            >
              <Box as={BsFillLightningChargeFill} mr=".5rem" color="#FFD666" />
              Read our snapshot
            </Button>
          </Box>
        </Box>
      )}

      {codeLaunched && (
        <Box
          w={{ base: '100%', xl: '40%' }}
          minW={{ base: '0', xl: '35rem' }}
          margin="0.85rem"
        >
          <Text
            fontFamily="Inter"
            fontWeight="800"
            fontSize={{ base: '3.3rem', lg: '4rem', xl: '5.375rem' }}
            lineHeight={{ base: '4.375rem', xl: '6.5rem' }}
          >
            Build web3 with friends.
          </Text>
          <Text
            fontFamily="Inter"
            fontWeight="500"
            mt="2.5rem"
            lineHeight="1.5"
            fontSize={{ base: '1.25rem', xl: '1.5rem' }}
          >
            Developer DAO is a community of thousand of web3 builders creating a
            better internet. Join us and create the future.
          </Text>

          <Flex justifyContent="center" w="100" mt="3rem">
            <Button
              px="1.5rem"
              border="1px solid black"
              borderRadius="0.625rem"
              bg="white"
              color="black"
              flexGrow={1}
              fontSize={{ base: '0.875rem', xl: '1.25rem' }}
              py={{ base: '1.75rem', xl: '2rem' }}
              _hover={{
                bg: 'black',
                color: 'white',
              }}
            >
              Claim $CODE
            </Button>

            <Button
              px="1.5rem"
              border="1px solid white"
              borderRadius="0.625rem"
              bg="black"
              color="white"
              flexGrow={1}
              py={{ base: '1.75rem', xl: '2rem' }}
              ml={{ base: '1.25rem', xl: '2rem' }}
              fontSize={{ base: '0.875rem', xl: '1.25rem' }}
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
        mr={{ base: 'auto', xl: '.75rem' }}
        ml={{ base: 'auto', lg: '2rem' }}
        mt={{ base: '5rem', lg: 0 }}
        mb={{ base: '2rem', xl: 0 }}
        transform={{ base: 'translateY(0)', xl: 'translateY(-40px)' }}
      >
        <Image
          h={{ base: '2rem', xl: '2.6875rem' }}
          alignSelf="end"
          opacity={Number(showImages)}
          transition=".3s"
          src="/intro_person_top.svg"
          alt="intro_person_top"
          mr={{ base: '3rem', lg: '5rem', xl: '7.75rem' }}
        />
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          columnGap={10}
          rowGap={20}
          mt="2rem"
          w={{ base: '80vw', lg: '50vw', xl: 'auto' }}
        >
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_1.png"
              alt="intro_person_1"
              opacity={Number(showImages)}
              transition=".3s"
              transitionDelay=".2s"
              w={{ base: '15rem', xl: '17rem', '2xl': '19.75rem' }}
              transform={{
                base: 'translateX(0)',
                xl: 'translateX(-100px)',
              }}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_2.png"
              alt="intro_person_2"
              opacity={Number(showImages)}
              transition=".3s"
              transitionDelay=".4s"
              w={{ base: '15rem', xl: '17rem', '2xl': '19.75rem' }}
              transform={{
                base: 'translateY(30px)',
              }}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_3.png"
              alt="intro_person_3"
              opacity={Number(showImages)}
              transition=".3s"
              transitionDelay=".6s"
              w={{ base: '15rem', xl: '17rem', '2xl': '19.75rem' }}
              transform={{
                base: 'translate(40px)',
                md: 'translate(0)',
                lg: 'translateX(60px)',
                xl: 'translate(0)',
              }}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              src="/intro_person_4.png"
              alt="intro_person_4"
              opacity={Number(showImages)}
              transition=".3s"
              transitionDelay=".8s"
              w={{ base: '9rem', md: '12rem', lg: '13rem', '2xl': '15.75rem' }}
              style={{ transform: 'translate(-30px, 30px)' }}
            />
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default IntroComponent;
