import * as React from 'react';

import { Avatar, Box, useColorModeValue } from '@chakra-ui/react';
export interface ITweetCardProps {
  name: string;
  image: string;
  handle: string;
  date: string;
  url: string;
  content: string;
}

export default function TweetCard(props: ITweetCardProps) {
  const { name, handle, date, content, url } = props;
  return (
    <Box
      as="a"
      href={url}
      target="_blank"
      rel="noopener"
      display="flex"
      rounded="lg"
      p="5"
      mx="4"
      maxWidth="400px"
      bg={useColorModeValue('white', 'gray.700')}
      shadow="base"
    >
      <Avatar mr="16px" size="sm" name={name} loading="lazy" />
      <Box fontSize="sm">
        <p>
          {name}{' '}
          <Box as="span" opacity={0.7}>
            {handle} · {date}
          </Box>
        </p>
        <Box
          as="p"
          mt="2"
          dangerouslySetInnerHTML={{
            __html: content.replace(/--/g, '<br /><br />'),
          }}
        />
      </Box>
    </Box>
  );
}
