import { Box, Text } from '@chakra-ui/layout';
import { useTranslation } from 'react-i18next';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/react';

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

  // const bgColor = useColorModeValue('#fff', '#212425');
  return (
    <Box
      fontFamily="inter"
      width={{ base: '80%', md: '100%', xl: '17rem' }}
      textAlign="left"
      mx="auto"
      p="6"
      rounded="md"
      // bg={bgColor}
    >
      <Image mb={4} src={imgSrc} alt={imgSrc} />
      <Text fontSize="md" mb={4} fontWeight="bold">
        {title}
      </Text>
      <Text color={color}>{description}</Text>
    </Box>
  );
}

export default Feature;
