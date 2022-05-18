import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import { useCallback } from 'react';

const Partners = () => {
  const { colorMode } = useColorMode();
  const handleButtonClick = useCallback(() => {
    const partnerFormUrl =
      'https://docs.google.com/forms/d/14MpHciXifNUjB9NDvdYgnzV4IXJUtN3wp8EEeqP4gZo/viewform';
    window.open(partnerFormUrl, '_blank');
  }, []);

  return (
    <Flex flexDir="column" justifyContent="center" pt="5.5rem" pb="5.5rem">
      <Heading
        textTransform={'capitalize'}
        fontFamily="Inter"
        fontWeight="800"
        fontSize="3.375rem"
        mb={{ base: '5rem', xl: '6.175rem' }}
        textAlign="center"
      >
        Our Partners
      </Heading>
      <Flex flexDir={{ base: 'column', xl: 'row' }} alignItems={'center'}>
        <Link
          href="https://thirdweb.com"
          mb={{ base: '4rem', xl: '0' }}
          mr={{ base: '0', xl: '6rem' }}
          target="_blank"
        >
          <Image
            src={colorMode === 'dark' ? '/thirdweb.svg' : '/thirdweb-light.svg'}
            alt="third web"
          />
        </Link>
        <Link
          href="https://gitcoin.co"
          mb={{ base: '4rem', xl: '0' }}
          mr={{ base: '0', xl: '6rem' }}
          target="_blank"
        >
          <Image
            src={colorMode === 'dark' ? '/gitcoin.svg' : '/gitcoin-light.svg'}
            alt="gitcoin"
          />
        </Link>
        <Link
          mb={{ base: '4rem', xl: '0' }}
          mr={{ base: '0', xl: '6rem' }}
          href="https://polygon.technology"
          target="_blank"
        >
          <Image
            src={colorMode === 'dark' ? '/polygon.svg' : '/polygon-light.svg'}
            alt="polygon"
          />
        </Link>
        <Link href="https://thegraph.com" target="_blank">
          <Image
            src={
              colorMode === 'dark' ? '/the-graph.svg' : '/the-graph-light.svg'
            }
            alt="the graph"
          />
        </Link>
      </Flex>
      <Button
        backgroundColor={colorMode === 'dark' ? 'white' : 'black'}
        color={colorMode === 'dark' ? 'black' : 'white'}
        fontFamily="Inter"
        fontWeight="500"
        fontSize={{ base: '1rem', xl: '1.25rem' }}
        borderRadius="56px"
        px="2rem"
        py="2rem"
        mt={{ base: '5rem', xl: '6.85rem' }}
        alignSelf="center"
        onClick={handleButtonClick}
      >
        Become a partner <ArrowForwardIcon w="1.5rem" h={'22px'} ml="8px" />
      </Button>
    </Flex>
  );
};

export default Partners;
