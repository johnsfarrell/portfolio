import React from 'react';
import { Wrap, WrapItem, Center, Flex, Heading, Grid } from '@chakra-ui/react';
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

export const LanguagesMain = (props: {
  languages: Language[];
  size: string;
}): React.ReactElement => {
  return (
    <Grid>
      <Flex
        className={'cg-apple16'}
        p={10}
        borderRadius={'3xl'}
        flexWrap="wrap"
        justifyContent={{ lg: 'left', base: 'center' }}
      >
        {props.languages.map((lang: Language) => (
          <Wrap key={lang.name} p={1}>
            <LanguageCard langInput={lang} size={props.size} key={lang.name} />
          </Wrap>
        ))}
      </Flex>
      <Heading>Hi</Heading>
    </Grid>
  );
};

export default Languages;
