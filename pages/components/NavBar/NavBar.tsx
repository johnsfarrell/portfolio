import React from 'react';
import { Button, Stack, Spacer, HStack } from '@chakra-ui/react';

const NavBar = (): React.ReactElement => {
  return (
    <Stack p={4} className={'navbar glossy'}>
      <HStack margin={'auto'} width={1100} fontSize={14}>
        <Button>Contact Me</Button>
        <Spacer />
        <Button bgColor={'transparent'} color={'gray.500'}>
          Overview
        </Button>
        <Button bgColor={'transparent'}>Resume</Button>
      </HStack>
    </Stack>
  );
};

export default NavBar;
