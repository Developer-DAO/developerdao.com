import { Box, Text } from '@chakra-ui/layout';

function JoinFuture() {
  return (
    <Box>
      <Text
        fontFamily="poppins"
        fontWeight="light"
        mb={2}
        fontSize={{ base: '3xl', md: '6xl', lg: '6xl' }}
      >
        Join the Future.
        {/* {t('heading')} */}
      </Text>
      <Text
        px={4}
        fontWeight="400"
        fontSize={{ base: '14px', md: '18px', lg: '18px' }}
        maxW={{ base: '90%', sm: '80%', md: '2xl' }}
      >
        Becoming a D_D member comes with benefits.
        {/* {t('subHeading')} */}
      </Text>
    </Box>
  );
}

export default JoinFuture;
