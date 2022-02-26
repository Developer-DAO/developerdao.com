import { ReactNode } from 'react';
import {
  Image,
  ButtonGroup,
  Link,
  Stack,
  Text,
  Flex,
  useColorMode,
  Box,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={6}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '4fr 2fr 2fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box spacing={{ base: '6', md: '8' }} align="start">
              <Flex alignItems="center">
                <Image
                  width="4rem"
                  h="4rem"
                  src={`/D_D_logo-${
                    colorMode === 'dark' ? 'dark' : 'light'
                  }.svg`}
                  alt="logo"
                />
                <Text
                  ml={'1.25rem'}
                  mr={'3rem'}
                  fontWeight="bold"
                  variant="medium"
                  color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
                >
                  Developer DAO
                </Text>
              </Flex>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Useful Links</ListHeader>
            <Link href={'#'} isExternal>
              Wiki
            </Link>
            <Link href={'#'} isExternal>
              Forum
            </Link>
            <Link href={'#'} isExternal>
              Snapshot
            </Link>
            <Link href={'#'} isExternal>
              Podcast
            </Link>
            <Link href={'#'} isExternal>
              Newsletter
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Discover</ListHeader>
            <Link href={'#'} isExternal>
              Blog
            </Link>
            <Link href={'#'} isExternal>
              Learning Resources
            </Link>
            <Link href={'#'} isExternal>
              Projects
            </Link>
            <Link href={'#'} isExternal>
              Partners
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
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
        </SimpleGrid>

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
      </Container>
    </Box>
  );
};

export default Footer;
