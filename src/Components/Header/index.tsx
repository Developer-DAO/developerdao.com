import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React, { ReactNode, useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flex={1}
        width="100%"
      >
        <Box>
          <Flex alignItems="center">
            <Image
              w="4rem"
              h="4rem"
              src={`/D_D_logo-${colorMode === 'dark' ? 'dark' : 'light'}.svg`}
              alt="logo"
            />
            <Text
              ml={'1.25rem'}
              mr={{ base: '1rem', sm: '3rem' }}
              fontWeight="bold"
              color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
              display={{ base: 'block', md: 'none', lg: 'block' }}
            >
              Developer DAO
            </Text>
          </Flex>
        </Box>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
      </Flex>
      <HStack
        spacing={{ base: 4, xl: 10 }}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        flexShrink={1}
        width={{ base: '100%', md: 'auto' }}
      >
        <MenuLinks isOpen={isOpen} />
        <Switch
          size="md"
          display={{ base: 'none', md: 'block' }}
          onChange={toggleColorMode}
          colorScheme="blackAlpha"
        />
      </HStack>
    </NavBarContainer>
  );
};

const CloseIcon = () => {
  const { colorMode } = useColorMode();
  return (
    <svg width="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill={colorMode === 'dark' ? 'white' : 'black'}
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );
};

const MenuIcon = () => {
  const { colorMode } = useColorMode();
  return (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill={colorMode === 'dark' ? 'white' : 'black'}
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
};

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box
      display={{ base: 'auto', md: 'none' }}
      onClick={toggle}
      cursor="pointer"
      justifyContent={'flex-end'}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({
  children,
  to = '/',
  ...rest
}: {
  children: ReactNode;
  to: string;
}) => {
  return (
    <Link target="_blank" href={to}>
      <Text display="block" fontSize={'20px'} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box display={{ base: isOpen ? 'flex' : 'none', md: 'block' }}>
      <Stack
        spacing={[0, '16px', null, '24px', '44px']}
        justify={{ base: 'space-between', md: 'flex-end' }}
        direction={{ base: 'column', md: 'row' }}
        pt={[8, 4, 0, 0]}
      >
        <MenuItem to="https://twitter.com/developer_dao">Twitter</MenuItem>
        <MenuItem to="https://calendar.google.com/calendar/u/0/embed?src=ctuhf0ekul1dps36lp1st1s54mesj7mj@import.calendar.google.com&ctz=UTC">
          Events
        </MenuItem>
        <MenuItem to="https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e">
          Wiki{' '}
        </MenuItem>
        <MenuItem to="https://developerdao.pallet.com/jobs">
          Job Board{' '}
        </MenuItem>
        <MenuItem to="https://developerdao.notion.site/Projects-c2240a6c0b0c41bea285f1ef9629f6db">
          Projects{' '}
        </MenuItem>
        <Switch
          size="md"
          display={{ base: 'block', md: 'none' }}
          onChange={toggleColorMode}
          colorScheme="blackAlpha"
        />
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      flexDir={{ base: 'column', md: 'row' }}
      wrap="wrap"
      w="100%"
      mb={8}
      py={1}
      px={{ base: 0, lg: 3 }}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
