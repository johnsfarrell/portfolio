import React from 'react';
import { Button, Stack, Spacer, HStack, Link } from '@chakra-ui/react';

const NavBar = (): React.ReactElement => {
  return (
    <Stack p={4} className={'navbar glossy'}>
      <HStack margin={'auto'} w={'100%'} fontSize={14}>
        <Button>Contact Me</Button>
        <Spacer />
        <Button bgColor={'transparent'} color={'gray.500'}>
          Overview
        </Button>
        <Link
          href="https://drive.google.com/file/d/1xmZWYiOLbqmUQMW7szmgTy896eGhxBFZ/view"
          isExternal
        >
          <Button bgColor={'transparent'}>Resume</Button>
        </Link>
      </HStack>
    </Stack>
  );
};

export default NavBar;
