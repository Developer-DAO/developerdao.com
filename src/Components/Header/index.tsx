import React, { ReactNode, useState } from 'react';
import {
  Link,
  Box,
  Flex,
  Text,
  Switch,
  Image,
  Stack,
  useColorMode,
  HStack,
  BoxProps,
} from '@chakra-ui/react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
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
            variant="medium"
            color={colorMode === 'dark' ? '#FFFFFF' : '#000000'}
            display={{ base: 'block', md: 'none', lg: 'block' }}
          >
            Developer DAO
          </Text>
        </Flex>
      </Box>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <HStack
        spacing={4}
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
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

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

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
    <Link href={to}>
      <Text display="block" fontSize={'20px'} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
      <Stack
        spacing={[0, '16px', null, '24px', '44px']}
        justify={{ base: 'space-between', md: 'flex-end' }}
        direction={{ base: 'column', md: 'row' }}
        pt={[8, 4, 0, 0]}
      >
        <MenuItem to="/">Latest Updates</MenuItem>
        <MenuItem to="/how">Events</MenuItem>
        <MenuItem to="/DAO Wiki">DAO Wiki </MenuItem>
        <MenuItem to="/pricing">Job Board </MenuItem>
        <MenuItem to="/pricing">Projects </MenuItem>
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
      wrap="wrap"
      w="100%"
      mb={8}
      py={1}
      px={3}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
