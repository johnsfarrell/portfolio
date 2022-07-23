import React from 'react';
import IntroductionCard from '../../components/IntroductionCard/IntroductionCard';
import { Box, Center, Container, Flex, Heading } from '@chakra-ui/react';
import Socials from '../../components/Socials/Socials';

const Contact = (): React.ReactElement => {
  return (
    <Container h={'100vh'} maxW="1400px" margin="auto" mb={10} px={0}>
      <Heading
        mt={200}
        mb={100}
        as="h1"
        fontSize={{ lg: '8xl', base: '5xl' }}
        textAlign={'center'}
        className="cg-apple12 animated-2"
      >
        John Farrell.
      </Heading>
      <Flex justifyContent={'center'}>
        <Socials />
      </Flex>
    </Container>
  );
};

export default Contact;
