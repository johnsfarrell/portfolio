import React from 'react';
import IntroductionCard from '../../components/IntroductionCard/IntroductionCard';
import {
  Badge,
  Box,
  Button,
  Center,
  color,
  Container,
  Flex,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Socials from '../../components/Socials/Socials';
import Link from 'next/link';

const Contact = (): React.ReactElement => {
  return (
    <Center className={'cg-apple13'} w={'100vw'} h={'100vh'}>
      <Link href="../">
        <Badge pos={'absolute'} left={4} top={4} _hover={{ cursor: 'pointer' }}>
          To main page
        </Badge>
      </Link>
      <Container
        p={{ lg: 20, base: 10 }}
        borderRadius={30}
        w={'fit-content'}
        bg={'gray.900'}
        className={'shadow-box-sm-dark'}
      >
        <VStack>
          <Heading
            as="h1"
            fontSize={{ lg: '7xl', base: '5xl' }}
            textAlign={'center'}
          >
            John Farrell
          </Heading>
          <Flex justifyContent={'center'} py={5}>
            <Socials />
          </Flex>
        </VStack>
      </Container>
    </Center>
  );
};

export default Contact;
