import React from 'react';
import {
  Heading,
  Box,
  Image,
  Text,
  Flex,
  Spacer,
  ButtonGroup,
  IconButton,
  Button,
  Link,
  chakra,
  Container,
} from '@chakra-ui/react';
import Socials from '../Socials/Socials';
import Languages from '../Languages/Languages';

const IntroductionCard = (): React.ReactElement => {
  return (
    <Box>
      <Box mt={20}>
        <Image
          className={'shadow-box-lg-light animated-1'}
          margin={'auto'}
          width={'50%'}
          src="https://avatars.githubusercontent.com/u/69059806?v=4"
          alt="John Farrell Profile"
          borderRadius={'100%'}
        />
      </Box>
      <Box margin={'auto'} justifyContent={'center'}>
        <Box justifyContent={'center'}>
          <Heading
            as="h1"
            fontSize={'8xl'}
            textAlign={'center'}
            className="cg-apple12 animated-2"
          >
            John Farrell
          </Heading>
          <Text
            my={3}
            fontSize="3xl"
            textAlign={'center'}
            className={'animated-3'}
          >
            Studying computer science at Brown University. My passion is in
            full-stack and software engineering.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. My passion is in
            full-stack and software engineering.
          </Text>
          <Flex
            justifyContent={'center'}
            className={'animated-4'}
            p={5}
            color={'gray.300'}
          >
            <Socials />
          </Flex>
        </Box>
        <Box mt={75}>
          <Heading fontSize="2xl" textAlign={'center'}>
            I am always excited to learn!
          </Heading>
          <Flex justifyContent={'center'} width={'100%'} mt={4}>
            <Languages
              languages={[
                { name: 'JavaScript', color: 'yellow' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'MySQL', color: 'orange' },
                { name: 'CSS', color: 'blue' },
                { name: 'Java', color: 'red' },
                { name: 'Chakra', color: 'teal' },
                { name: 'GraphQL', color: 'pink' },
                { name: 'React', color: 'blue' },
                { name: 'HTML', color: 'red' },
                { name: 'PostgreSQL', color: 'teal' },
                { name: 'BootStrap5', color: 'blue' },
                { name: 'NodeJS', color: 'green' },
                { name: 'PHP', color: 'teal' },
                { name: 'NextJS', color: 'orange' },
                { name: 'Cypress', color: 'gray' },
                { name: 'Docker', color: 'blue' },
                { name: 'SASS', color: 'pink' },
                { name: 'Racket', color: 'red' },
              ]}
              size="2xl"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionCard;
