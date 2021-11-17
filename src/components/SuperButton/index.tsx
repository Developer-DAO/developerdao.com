import React, { ReactElement } from 'react';
import { Button } from '@chakra-ui/react';

type SuperButtonProps = {
  background: string;
  leftIcon: ReactElement;
  title: string;
  hoverColor?: string;
};

function SuperButton({
  background,
  leftIcon,
  title,
  hoverColor,
}: SuperButtonProps) {
  return (
    <Button
      borderRadius="2xl"
      py="0.75rem"
      _hover={{ bg: hoverColor }}
      px="1.5rem"
      fontWeight="normal"
      color="white"
      fontSize="1rem"
      colorScheme={background}
      leftIcon={leftIcon}
    >
      {title}
    </Button>
  );
}

export default SuperButton;
