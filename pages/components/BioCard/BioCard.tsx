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
} from '@chakra-ui/react';
type Language = {
  name: string;
  color: string;
};

export const BioCard = (): React.ReactElement => {
  return (
    <Grid
      width={'95%'}
      templateColumns="repeat(2, 1fr)"
      className={'cg-apple15'}
      p={10}
      borderRadius={'3xl'}
      flexWrap="wrap"
      justifyContent={'left'}
    >
      <GridItem
        rowSpan={2}
        display="flex"
        flexWrap={'wrap'}
        alignContent={'center'}
        width={425}
      >
        <Heading fontSize={'5xl'} mb={10}>
          Runner by day, {'\n'} coder by night.
        </Heading>
        <Text>
          I enjoy racing D1 cross country, track and field at Brown University.
          Beyond running, I spend the majority of my free time coding or playing
          piano.
        </Text>
      </GridItem>
      <GridItem rowSpan={2} width={500}>
        <Image
          className={'shadow-box-lg-dark'}
          m={'auto'}
          width={'80%'}
          src="https://avatars.githubusercontent.com/u/69059806?v=4"
          alt="John Farrell Profile"
          borderRadius={'100%'}
        />
      </GridItem>
    </Grid>
  );
};

export default BioCard;
