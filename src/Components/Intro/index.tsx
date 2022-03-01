import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';
import { BsFillLightningChargeFill } from 'react-icons/bs';

const IntroComponent = () => {
  return (
    <Box>
      <Flex
        direction="row"
        width="100%"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box
          w={{ base: '100%', lg: '30%' }}
          border="1px solid"
          borderRadius="11px"
          p="6"
        >
          <Text fontSize="54" fontFamily="Inter" fontWeight="800">
            Build web3 with friends.
          </Text>
          <Text fontSize="24" fontFamily="Inter" fontWeight="500">
            Developer DAO is a community of thousand of web3 builders creating a
            better internet. Join us and create the future.
          </Text>
          <Box border="1px solid" borderRadius="11px" bg="white" p="6" mt="6">
            <Text
              fontSize="24"
              fontFamily="Inter"
              fontWeight="700"
              color="black"
            >
              Current Status: Season 0
            </Text>
            <Text
              fontSize="20"
              fontFamily="Inter"
              fontWeight="500"
              color="black"
            >
              We&rsquo;re forming guilds, creating culture, strengthening our
              community, teaching & learning, and building cool things together.
            </Text>
            <Button
              mt="6"
              p="6"
              border="1px solid black"
              borderRadius="11px"
              color="black"
            >
              <Box as={BsFillLightningChargeFill} />
              Read our snapshot
            </Button>
          </Box>
        </Box>
        <Flex
          direction="column"
          w={{ base: '100%', lg: '30%' }}
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
