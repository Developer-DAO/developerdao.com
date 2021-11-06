import React, { ReactElement } from 'react';
import { Button } from '@chakra-ui/react';

type SuperButtonProps = {
  background: string;
  leftIcon: ReactElement;
  title: string;
};

function SuperButton({ background, leftIcon, title }: SuperButtonProps) {
  return (
    <Button
      borderRadius="2xl"
      py="0.75rem"
      px="1.5rem"
      fontWeight="normal"
      color="white"
      fontSize="1rem"
      background={background}
      leftIcon={leftIcon}
    >
      {title}
    </Button>
  );
}

export default SuperButton;
