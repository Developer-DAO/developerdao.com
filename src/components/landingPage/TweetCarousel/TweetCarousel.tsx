import { TWEETLIST } from '@/constants';
import * as React from 'react';
import Marquee from 'react-fast-marquee';
import TweetCard from '../TweetCard';
import { Container, HStack } from '@chakra-ui/react';
export interface ITweetListProps {}

export default function TweetList(props: ITweetListProps) {
  return (
    <Container pb="120px" maxW="100vw">
      <HStack spacing="40px" columns={{ base: 1, md: 3 }}>
        <Marquee gradient={false} speed={50}>
          {TWEETLIST.map((tweet) => (
            <TweetCard key={tweet.name} {...tweet} />
          ))}
        </Marquee>
      </HStack>
    </Container>
  );
}
