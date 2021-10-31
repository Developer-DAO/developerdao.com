import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';
import { FaTwitter } from 'react-icons/fa';

function Tweet({
  tweet,
  profileSrc,
  name,
  userName,
}: {
  tweet: string;
  profileSrc: string;
  name: string;
  userName: string;
}) {
  const { t } = useTranslation();
  const color = useColorModeValue('#000', '#fff');

  const bgColor = useColorModeValue('#fff', '#212425');

  return (
    <Box
      width={{ base: '90%', sm: 'md', md: 'lg' }}
      textAlign="left"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bg={bgColor}
    >
      <Text color={color}>{tweet}</Text>
      <Flex mt={2} alignItems="center">
        <Box
          rounded="full"
          width={12}
          as="img"
          src={profileSrc}
          alt={name}
          mr={2}
        />
        <Box>
          <Text fontSize="sm" fontWeight="bold">
            {name}
          </Text>
          <Flex gap={2}>
            <Box mr={0.5} width={5}>
              <FaTwitter width="100%" />
            </Box>
            <Text fontSize="xs" color="gray.500">
              @{userName}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Tweet;
