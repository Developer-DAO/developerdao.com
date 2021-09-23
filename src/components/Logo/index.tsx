import React from 'react';
import { Box, ChakraProps, css } from '@chakra-ui/react';

function Logo(props: ChakraProps) {
  return (
    <Box
      rounded="full"
      objectFit="cover"
      objectPosition="center"
      overflow="hidden"
      {...props}
    >
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" fill="black" />
        <rect
          x="237"
          y="262"
          width="22"
          height="86"
          transform="rotate(90 237 262)"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 122V262H76C114.66 262 146 230.66 146 192C146 153.34 114.66 122 76 122H27ZM57 152L57 232H76C98.0914 232 116 214.091 116 192C116 169.909 98.0914 152 76 152H57Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M259 122V262H308C346.66 262 378 230.66 378 192C378 153.34 346.66 122 308 122H259ZM289 152L289 232H308C330.091 232 348 214.091 348 192C348 169.909 330.091 152 308 152H289Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}

export default Logo;
