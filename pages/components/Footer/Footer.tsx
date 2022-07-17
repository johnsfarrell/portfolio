import React from 'react';
import {
  Box,
  Text,
  useClipboard,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
import Socials from '../Socials/Socials';

export default function Footer(): React.ReactElement {
  const { hasCopied, onCopy } = useClipboard('jsfarrell12@gmail.com');
  return (
    <Box bg="gray.900" color="gray.200" fontFamily="mono" fontSize="xl" p={10}>
      <VStack align="center">
        <Text
          color="gray.100"
          bg="gray.600"
          px={3}
          py={1}
          borderRadius={7}
          onClick={onCopy}
          transitionDuration="300ms"
          _hover={{ cursor: 'pointer', backgroundColor: 'gray.700' }}
        >
          {hasCopied ? 'Copied!' : 'jsfarrell12@gmail.com'}
        </Text>
        <Text p={2}>Fairport, NY to Providence, RI</Text>
        <HStack>
          <Socials />
        </HStack>
      </VStack>
    </Box>
  );
}
