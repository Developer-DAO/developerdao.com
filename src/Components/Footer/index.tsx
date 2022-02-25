import {
  Image,
  ButtonGroup,
  Link,
  Stack,
  Text,
  Flex,
  useColorMode,
  Box,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="footer" role="contentinfo" alignItems={'center'} w={'full'}>
      <Stack
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '12', md: '16' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Flex alignItems="center">
            <Image
              width="4rem"
              h="4rem"
              src={`/D_D_logo-${colorMode === 'dark' ? 'dark' : 'light'}.svg`}
              alt="logo"
            />
            <Text
              ml={'1.25rem'}
              fontWeight="bold"
              variant="medium"
              color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
            >
              Developer DAO
            </Text>
          </Flex>
        </Stack>
        <Stack
          direction={['column', 'column', 'row']}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack minW="60" padding-bottom="5" spacing="6">
            <Text>Useful Links</Text>
            <Stack shouldWrapChildren>
              <Link href="" isExternal>
                Wiki
              </Link>
              <Link href="" isExternal>
                Forum
              </Link>
              <Link href="" isExternal>
                Snapshot
              </Link>
              <Link href="" isExternal>
                Podcast
              </Link>
              <Link href="" isExternal>
                Newsletter
              </Link>
            </Stack>
          </Stack>

          <Stack minW="40" padding-bottom="5" spacing="6">
            <Text>Discover</Text>
            <Stack spacing="3" shouldWrapChildren>
              <Link href="" isExternal>
                Blog
              </Link>
              <Link href="" isExternal>
                Learning Resources
              </Link>
              <Link href="" isExternal>
                Projects
              </Link>
              <Link href="" isExternal>
                Partners
              </Link>
            </Stack>
          </Stack>

          <Stack minW="40" spacing="6">
            <Text>Social</Text>
            <Stack
              spacing="4"
              direction={{ base: 'column', sm: 'row' }}
              maxW={{ lg: '360px' }}
            >
              <ButtonGroup>
                <button>
                  <FaTwitter href="#" aria-label="Twitter" />
                </button>
                <button>
                  <FaDiscord href="#" aria-label="Discord" />
                </button>
                <button>
                  <FaGithub href="#" aria-label="Github" />
                </button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        pt="8"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Flex>
          <Image
            src={`/Blur-img-${colorMode === 'dark' ? 'light' : 'dark'}.svg`}
            alt="Blur"
          />
          <Text fontSize="sm" ml={2}>
            {new Date().getFullYear()} @ Developer DAO
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Footer;
