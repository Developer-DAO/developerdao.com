import * as React from 'react';
import {
  Box,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { FaMoon, FaSun } from 'react-icons/fa';
import Link from 'next/link';
import { useViewportScroll } from 'framer-motion';
import DesktopNav from '@/components/common/NavBar/DesktopNav';
import MobileNav from '@/components/common/NavBar/MobileNav';
import { Logo } from '@/components/common';
import { useTranslation } from 'react-i18next';
export interface INavBarProps {}

export default function NavBar(props: INavBarProps) {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const ref = React.useRef<HTMLHeadingElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {};
  const bg = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)',
  );
  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  return (
    <Box>
      <Flex
        as={'header'}
        transition="box-shadow 0.2s, background-color 0.2s"
        pos="fixed"
        top="0"
        w={'full'}
        height="4.5rem"
        shadow={y > height ? 'sm' : undefined}
        zIndex="3"
        justify={'center'}
        css={
          y > height
            ? {
                backdropFilter: 'saturate(180%) blur(5px)',
                backgroundColor: bg,
              }
            : undefined
        }
      >
        <Container as={Flex} maxW={'7xl'} align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'start', md: 'start' }}
          >
            <Link href={'/'} passHref>
              <Stack
                as={'a'}
                direction={'row'}
                alignItems={'center'}
                title={t('title')}
                spacing={{ base: 2, sm: 4 }}
              >
                <Logo h={9} w={9} />
              </Stack>
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={{ base: 6, md: 8 }}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <DesktopNav display={{ base: 'none', md: 'flex' }} />
            <IconButton
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Color Mode'}
              onClick={toggleColorMode}
              icon={<SwitchIcon />}
            />
            <IconButton
              onClick={onToggle}
              icon={
                isMobileNavOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
              display={{ base: 'flex', md: 'none' }}
            />
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={isMobileNavOpen} />
    </Box>
  );
}
