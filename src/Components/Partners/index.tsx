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

interface Props {
  partnerData: Array<Record<string, any>>;
}

const Partners = ({ partnerData }: Props) => {
  const { colorMode } = useColorMode();
  const handleButtonClick = useCallback(() => {
    const partnerFormUrl = 'https://airtable.com/shrYLrOrjhOHJUdVl';
    window.open(partnerFormUrl, '_blank');
  }, []);

  if (partnerData === null || typeof partnerData === 'undefined') {
    return <></>;
  }

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
        {partnerData?.map((item: any, index: number) => {
          return (
            <Link
              href={item.attributes.website}
              key={index}
              mb={{ base: '4rem', xl: '0' }}
              mr={{ base: '0', xl: '6rem' }}
              target="_blank"
            >
              <Image
                src={
                  colorMode === 'dark'
                    ? `${process.env.NEXT_PUBLIC_CMS_URL}${item.attributes.logo_dark.data.attributes.url}`
                    : `${process.env.NEXT_PUBLIC_CMS_URL}${item.attributes.logo_light.data.attributes.url}`
                }
                alt="third web"
              />
            </Link>
          );
        })}
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
