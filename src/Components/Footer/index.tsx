import {
  Box,
  ButtonGroup,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'md'} mb={6}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box pt={{ base: 8, lg: 16 }}>
      <SimpleGrid
        templateColumns={{
          sm: '4fr 2fr',
          md: '1.5fr 1.5fr 1fr 1fr',
        }}
        spacing={{ base: 10, md: 16 }}
      >
        <Stack>
          <Flex alignItems="center">
            <Image
              width="4rem"
              h="4rem"
              src={`/D_D_logo-${colorMode === 'dark' ? 'dark' : 'light'}.svg`}
              alt="logo"
            />
            <Text
              ml={'1.25rem'}
              mr={{ base: '0', md: '3rem' }}
              fontWeight="bold"
              color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
            >
              Developer DAO
            </Text>
          </Flex>
        </Stack>

        <Stack align={'flex-start'}>
          <ListHeader>Useful Links</ListHeader>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={
              'https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e'
            }
            isExternal
          >
            Wiki
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={'https://forum.developerdao.com/'}
            isExternal
          >
            Forum
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={
              'https://developerdao.notion.site/How-to-use-Snapshot-32692309faf446ddb2a898f22050fb5f#05f55b4052c044169402a443b36945ff'
            }
            isExternal
          >
            Snapshot
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={'#'}
            isExternal
          >
            Podcast
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={
              'https://developerdao.notion.site/Newsletter-d9c971f2bea446338624042ea20547f9'
            }
            isExternal
          >
            Newsletter
          </Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Discover</ListHeader>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={'https://devdao.mirror.xyz/'}
            isExternal
          >
            Blog
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={'https://airtable.com/shrzgqiMiHE18Iy9O/tbljejdzelezqT0W7'}
            isExternal
          >
            Learning Resources
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={
              'https://developerdao.notion.site/Projects-c2240a6c0b0c41bea285f1ef9629f6db'
            }
            isExternal
          >
            Projects
          </Link>
          <Link
            textDecoration="underline"
            _hover={{ textDecoration: 'none' }}
            href={'#'}
            isExternal
          >
            Partners
          </Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Social</ListHeader>
          <ButtonGroup>
            <a href="https://twitter.com/developer_dao">
              <FaTwitter aria-label="Twitter" />
            </a>
            <a href="https://t.co/k407RuG8eV">
              <FaDiscord aria-label="Discord" />
            </a>
            <a href="https://github.com/Developer-DAO">
              <FaGithub aria-label="Github" />
            </a>
          </ButtonGroup>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
