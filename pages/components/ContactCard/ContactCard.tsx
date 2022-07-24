import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const ContactCard = (): React.ReactElement => {
  return (
    <Flex
      templateColumns={{ md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)' }}
      className={'cg-apple13'}
      p={10}
      height={'100%'}
      borderRadius={'3xl'}
      flexWrap="wrap"
      justifyContent={'left'}
    >
      <Heading>Contact Me</Heading>
      <Text>Click here to view my full contact card.</Text>
    </Flex>
  );
};

export default ContactCard;
