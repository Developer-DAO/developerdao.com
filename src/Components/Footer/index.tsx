import {
  Image,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  Flex,
  useColorMode,
} from '@chakra-ui/react';
import * as React from 'react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex as="footer" role="contentinfo" alignItems={'center'} w={'full'}>
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
          <Stack minW="36" padding-bottom="5" flex="1">
            <Text>Useful Links</Text>
            <Stack shouldWrapChildren>
              <Button variant="link">Wiki</Button>
              <Button variant="link">Forum</Button>
              <Button variant="link">Snapshot</Button>
              <Button variant="link">Podcast</Button>
              <Button variant="link">Newsletter</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Discover
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Blog</Button>
              <Button variant="link">Learning Resources</Button>
              <Button variant="link">Projects</Button>
              <Button variant="link">Partners</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Social
          </Text>
          <Stack
            spacing="4"
            direction={{ base: 'column', sm: 'row' }}
            maxW={{ lg: '360px' }}
          >
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaDiscord fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaGithub fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
        </Stack>
        <Stack
          pt="8"
          pb="12"
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
      </Stack>
    </Flex>
  );
};

export default Footer;
