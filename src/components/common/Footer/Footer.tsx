import * as React from 'react';
import {
  Box,
  Stack,
  Text,
  TextProps,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  Container,
  chakra,
} from '@chakra-ui/react';
import Logo from '@/components/Logo';
import { FOOTERLINKS } from '@/constants';
export interface IAppProps {}

const Copyright = (props: TextProps) => (
  <Box fontSize="sm" {...props}>
    <chakra.a
      target="_blank"
      title="Vercel"
      rel="noopener noreferrer"
      href="https://vercel.com/?utm_source=developerdao&utm_campaign=oss"
    >
      <img
        alt="Powered by Vercel"
        height="32"
        src="https://raw.githubusercontent.com/nextauthjs/next-auth/canary/www/static/img/powered-by-vercel.svg"
      />
    </chakra.a>
  </Box>
);

const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    {FOOTERLINKS.map((data) => (
      <IconButton
        as="a"
        key={data.id}
        href={data.link}
        icon={data.icon}
        aria-label=""
      />
    ))}
  </ButtonGroup>
);

export default function App(props: IAppProps) {
  return (
    <Box as="footer" role="contentinfo" py="12" px={{ base: '4', md: '8' }}>
      <Container maxW={'7xl'}>
        <Stack spacing="4">
          <Stack
            direction={['column', 'row']}
            align="center"
            justify="space-between"
            spacing="4"
          >
            <Stack direction={'row'} alignItems={'center'} spacing="4">
              <Logo h={7} w={7} />
              <Text display="inline-flex">A project of the D_D community</Text>
            </Stack>

            <SocialMediaLinks />
          </Stack>
          <Copyright alignSelf="center" />
        </Stack>
      </Container>
    </Box>
  );
}
