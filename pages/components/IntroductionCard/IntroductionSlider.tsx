import {
  Container,
  Image,
  Box,
  Text,
  Heading,
  Flex,
  Stack,
  Center,
  VStack,
} from '@chakra-ui/react';
import Socials from '../Socials/Socials';

const IntroductionSlider = (): React.ReactElement => {
  return (
    <VStack
      mt={40}
      d={'flex'}
      justifyContent={'center'}
      h={1000}
      wrap={'nowrap'}
    >
      <Image
        w={{ sm: '35%', base: '70%' }}
        className={'shadow-box-lg-light animated-1'}
        src="https://avatars.githubusercontent.com/u/69059806?v=4"
        alt="John Farrell Profile"
        borderRadius={'100%'}
      />
      <Heading
        as="h1"
        fontSize={{ lg: '8xl', base: '6xl' }}
        textAlign={'center'}
        className="cg-apple12 animated-2"
      >
        John Farrell
      </Heading>
      <Center>
        <Text
          my={3}
          fontSize={{ lg: '3xl', base: '2xl' }}
          textAlign={'center'}
          className={'animated-3'}
          w={'70%'}
        >
          Studying computer science at Brown University. My passion is in
          full-stack and software engineering. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. My passion is in full-stack
          and software engineering.
        </Text>
      </Center>
      <Flex
        justifyContent={'center'}
        className={'animated-4'}
        p={5}
        color={'gray.300'}
      >
        <Socials />
      </Flex>
    </VStack>
  );
};

export default IntroductionSlider;
