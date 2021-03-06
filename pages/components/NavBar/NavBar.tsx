import React from 'react';
import { Button, Stack, Spacer, HStack, Link } from '@chakra-ui/react';

const NavBar = (): React.ReactElement => {
  return (
    <Stack p={4} className={'navbar glossy'}>
      <HStack margin={'auto'} w={'100%'} fontSize={14}>
        <Link
          href="../contact"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button>Contact Me</Button>
        </Link>
        <Spacer />
        <Button bgColor={'transparent'} color={'gray.500'}>
          Overview
        </Button>
        <Link
          href="../resume"
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button bgColor={'transparent'}>Resume</Button>
        </Link>
      </HStack>
    </Stack>
  );
};

export default NavBar;
