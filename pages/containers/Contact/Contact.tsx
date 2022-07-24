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
      <Link href="../" passHref>
        <Badge pos={'absolute'} left={4} top={4} _hover={{ cursor: 'pointer' }}>
          To main page
        </Badge>
      </Link>
      <Container
        p={20}
        borderRadius={30}
        w={'fit-content'}
        bg={'gray.900'}
        className={'shadow-box-sm-dark'}
      >
        <VStack>
          <Heading as="h1" fontSize={'5xl'} textAlign={'center'} mb={6}>
            John Farrell
          </Heading>
          <Flex justifyContent={'center'}>
            <Socials />
          </Flex>
        </VStack>
      </Container>
    </Center>
  );
};

export default Contact;
