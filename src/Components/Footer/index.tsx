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
import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'md'} mb={6}>
      {children}
    </Text>
  );
};

type link = {
  href: string;
  text: string;
};

const ListLinks = (links: link[]) => {
  return (
    <>
      {links.map((link: link, key) => {
        return (
          <Link
            key={key}
            textDecoration="underline"
            fontSize="1.3rem"
            color="#C3C3C3"
            _hover={{ textDecoration: 'none' }}
            href={link.href}
            isExternal
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
};

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box pt="6rem" pb="5.875rem" width="100%">
      <SimpleGrid
        templateColumns={{
          md: '1fr',
          lg: '3fr 1fr 1fr 1fr',
        }}
        spacing={{ base: 10, md: 16 }}
      >
        <Stack>
          <Flex alignItems="center">
            <Image
              width="5rem"
              h="5rem"
              src={`/D_D_logo-${colorMode === 'dark' ? 'dark' : 'light'}.svg`}
              alt="logo"
            />
            <Text
              ml={'1.25rem'}
              mr={{ base: '0', md: '3rem' }}
              fontWeight="bold"
              fontSize="1.7rem"
              color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
            >
              Developer DAO
            </Text>
          </Flex>
        </Stack>

        <Stack align={'flex-start'} paddingTop="1.4375rem">
          <ListHeader>Useful Links</ListHeader>
          {ListLinks([
            {
              href: 'https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e',
              text: 'Wiki',
            },
            {
              href: 'https://forum.developerdao.com/',
              text: 'Forum',
            },
            {
              href: 'https://snapshot.org/#/devdao.eth',
              text: 'Snapshot',
            },
            {
              href: 'https://docs.google.com/forms/d/e/1FAIpQLSfEBUILgv1MVf6TP_LlIoA4BKJPA93A75Owz5NwDdfk6oX0IA/viewform',
              text: 'Become a partner',
            },
          ])}
        </Stack>
        <Stack align={'flex-start'} paddingTop="1.4375rem">
          <ListHeader>Discover</ListHeader>
          {ListLinks([
            {
              href: 'https://devdao.mirror.xyz/',
              text: 'Blog',
            },
            {
              href: 'https://developerdao.notion.site/Newsletter-d9c971f2bea446338624042ea20547f9',
              text: 'Newsletter',
            },
            {
              href: 'https://developerdao.notion.site/Projects-c2240a6c0b0c41bea285f1ef9629f6db',
              text: 'Projects',
            },
          ])}
        </Stack>
        <Stack align={'flex-start'} paddingTop="1.4375rem">
          <ListHeader>Social</ListHeader>
          <ButtonGroup>
            <Link target={'_blank'} href="https://twitter.com/developer_dao">
              <FaTwitter aria-label="Twitter" />
            </Link>
            <Link target={'_blank'} href="https://t.co/k407RuG8eV">
              <FaDiscord aria-label="Discord" />
            </Link>
            <Link target={'_blank'} href="https://github.com/Developer-DAO">
              <FaGithub aria-label="Github" />
            </Link>
            <Link
              target={'_blank'}
              href="hhttps://www.youtube.com/c/DeveloperDAO"
            >
              <FaYoutube aria-label="Youtube" />
            </Link>
          </ButtonGroup>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
