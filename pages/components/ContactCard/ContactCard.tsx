import React from 'react';
import { Badge, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

const ContactCard = (): React.ReactElement => {
  return (
    <Link href="../contact" _hover={{ cursor: 'pointer' }}>
      <Flex
        w="100%"
        h="100%"
        bg={'gray.900'}
        borderRadius={'3xl'}
        alignContent={'center'}
        justifyContent={'space-between'}
        alignItems={'flex-start'}
        flexDir={'column'}
      >
        <Flex p={6}>
          <Badge>Contact Card</Badge>
        </Flex>
        <Flex
          p={10}
          justifyContent={'center'}
          alignItems={'center'}
          flexDir={'column'}
        >
          <Image
            w={'80%'}
            src="https://avatars.githubusercontent.com/u/69059806?v=4"
            alt="John Farrell Profile"
            borderRadius={'100%'}
          />
          <Heading fontSize={'5xl'}>Contact Me</Heading>
        </Flex>
        <Flex justifyContent={'center'} w="100%" p="5" color={'gray.600'}>
          <Text>View full contact card.</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ContactCard;
