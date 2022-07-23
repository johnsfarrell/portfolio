import React from 'react';
import { Box, Stack, Spacer, HStack } from '@chakra-ui/react';

const NavBar = (): React.ReactElement => {
  return (
    <Stack p={4} className={'navbar glossy'}>
      <HStack margin={'auto'} width={810} fontSize={14}>
        <Box>John Farrell</Box>
        <Spacer />
        <Box color={'gray.500'}>Overview</Box>
        <Box>Portfolio</Box>
        <Box>Resume</Box>
      </HStack>
    </Stack>
  );
};

export default NavBar;
