import { Button, Flex, Heading, Image, useCallbackRef } from '@chakra-ui/react';
import { useCallback } from 'react';

const Partners = () => {
  const handleButtonClick = useCallback(() => {
    const partnerFormUrl =
      'https://docs.google.com/forms/d/14MpHciXifNUjB9NDvdYgnzV4IXJUtN3wp8EEeqP4gZo/viewform';
    window.open(partnerFormUrl, '_blank');
  }, []);

  return (
    <Flex flexDir={'column'}>
      <Heading
        textTransform={'capitalize'}
        fontFamily="Inter"
        fontWeight="800"
        fontSize={{ base: '2.625rem', xl: '3.375rem' }}
        mb={{ base: '6rem', xl: '9.175rem' }}
      >
        Our Partners
      </Heading>
      <Flex></Flex>
      <Button
        backgroundColor="white"
        textColor="black"
        fontFamily="Inter"
        fontWeight="500"
        fontSize={{ base: '1rem', xl: '1.25rem' }}
        borderRadius="56px"
        paddingX={'1.5rem'}
        paddingY={'1.5rem'}
        mt={{ base: '7rem', xl: '8.85rem' }}
        alignSelf="center"
        onClick={handleButtonClick}
      >
        Become a partner{' '}
        <Image src="/arrow.svg" alt="arrow" width="15px" ml="8px" />
      </Button>
    </Flex>
  );
};

export default Partners;
