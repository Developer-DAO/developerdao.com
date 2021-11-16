import { Box, Text, Heading, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/react';
import theme from '../../theme';

function Feature({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string;
  title: string;
  description: string;
}) {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');

  return (
    <Stack
      spacing={4}
      fontFamily="inter"
      width={{ base: '80%', md: '100%', xl: '17rem' }}
      p="6"
      alignItems={{ base: 'center', md: 'flex-start' }}
      rounded="md"
    >
      <Box>
        <Image src={imgSrc} alt="" />
      </Box>
      <Heading fontSize="md" fontWeight="bold">
        {title}
      </Heading>
      <Text textAlign={{ base: 'center', md: 'left' }} color={color}>
        {description}
      </Text>
    </Stack>
  );
}

export default Feature;
