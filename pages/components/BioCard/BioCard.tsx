import React from 'react';
import {
  Wrap,
  WrapItem,
  Center,
  Flex,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
  VStack,
  ChakraProvider,
} from '@chakra-ui/react';
type Language = {
  name: string;
  color: string;
};

export const BioCard = (): React.ReactElement => {
  return (
    <Grid
      width={'95%'}
      templateColumns={{ md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)' }}
      className={'cg-apple15'}
      p={10}
      borderRadius={'3xl'}
      justifyContent={'left'}
    >
      <GridItem rowSpan={2} width={'100%'}>
        <Image
          className={'shadow-box-lg-dark'}
          m={'auto'}
          width={{ md: '80%', base: '60%' }}
          src="https://avatars.githubusercontent.com/u/69059806?v=4"
          alt="John Farrell Profile"
          borderRadius={'100%'}
        />
      </GridItem>
      <GridItem
        rowSpan={2}
        display="flex"
        flexWrap={'wrap'}
        alignContent={'center'}
        width={'100%'}
      >
        <Heading fontSize={'5xl'} mb={10}>
          <VStack>
            <Text>Running by day,</Text>
            <Text>coding by night.</Text>
          </VStack>
        </Heading>
        <Text>
          I enjoy racing D1 cross country, track and field at Brown University.
          Beyond running, I spend the majority of my free time coding or playing
          piano.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default BioCard;
