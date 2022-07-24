import React from 'react';
import { Flex, Heading, Text } from '@chakra-ui/react';

const ContactCard = (): React.ReactElement => {
  return (
    <Flex
      justifyContent={'center'}
      width={'30%'}
      m={'auto'}
      mt={4}
      flexWrap={'wrap'}
      bg={'gray.900'}
      w={'max'}
      h={'max'}
    >
      <Heading>Contact Me</Heading>
      <Text>Click here to view my full contact card.</Text>
    </Flex>
  );
};

export default ContactCard;
