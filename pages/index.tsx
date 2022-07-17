import { Stack, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ColorModeScript } from '@chakra-ui/react';

const Home: NextPage = () => (
  <Stack spacing={6}>
    <Heading as="h2" size="xl">
      Hello!
    </Heading>
  </Stack>
);

export default Home;
