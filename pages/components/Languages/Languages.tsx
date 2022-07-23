import React from 'react';
import {
  Wrap,
  WrapItem,
  Center,
  Flex,
  Heading,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
type Language = {
  name: string;
  color: string;
};

const LanguageCard = (props: {
  langInput: Language;
  size: string;
}): React.ReactElement => {
  return (
    <WrapItem fontFamily="mono">
      <Center
        fontSize={{ lg: props.size, base: 'xl' }}
        borderRadius={5}
        px={2}
        fontWeight="bold"
        color="blackAlpha.900"
        bg={props.langInput.color + '.400'}
      >
        {props.langInput.name.toUpperCase()}
      </Center>
    </WrapItem>
  );
};

const Languages = (props: {
  languages: Language[];
  size: string;
}): React.ReactElement => {
  return (
    <Flex flexWrap="wrap" justifyContent={{ lg: 'left', base: 'center' }}>
      {props.languages.map((lang: Language) => (
        <Wrap key={lang.name} p={1}>
          <LanguageCard langInput={lang} size={props.size} key={lang.name} />
        </Wrap>
      ))}
    </Flex>
  );
};

const LanguageMainCard = (props: {
  langInput: Language;
  size: string;
}): React.ReactElement => {
  return (
    <WrapItem className={'language-main'}>
      <Center
        fontSize={props.size}
        borderRadius={5}
        px={2}
        fontWeight="bold"
        color="blackAlpha.900"
        className={'cg-card-' + props.langInput.color}
      >
        {props.langInput.name.toUpperCase()}
      </Center>
    </WrapItem>
  );
};

export const LanguagesMainCard = (props: {
  languages: Language[];
  size: string;
}): React.ReactElement => {
  return (
    <Grid
      w={'95%'}
      templateColumns="repeat(2, 1fr)"
      gap={8}
      className={'cg-apple16'}
      p={10}
      borderRadius={'3xl'}
      flexWrap="wrap"
      justifyContent={'left'}
    >
      <GridItem rowSpan={2} width={500}>
        <Flex flexWrap={'wrap'}>
          {props.languages.map((lang: Language) => (
            <Flex flexWrap={'wrap'} key={lang.name} p={1}>
              <LanguageMainCard
                langInput={lang}
                size={props.size}
                key={lang.name}
              />
            </Flex>
          ))}
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={2}
        display="flex"
        flexWrap={'wrap'}
        alignContent={'center'}
        width={400}
      >
        <Heading fontSize={'5xl'} mb={10}>
          I&apos;m Prepared.
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Languages;
