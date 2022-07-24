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
  HStack,
} from '@chakra-ui/react';
import Socials from '../Socials/Socials';
import { LanguagesMainCard } from '../Languages/Languages';
import BioCard from '../BioCard/BioCard';
import ContactCard from '../ContactCard/ContactCard';

const IntroductionCard = (): React.ReactElement => {
  return (
    <Box>
      <Box mt={20} p={3}>
        <Image
          className={'shadow-box-lg-light animated-1'}
          margin={'auto'}
          width={'30%'}
          src="https://avatars.githubusercontent.com/u/69059806?v=4"
          alt="John Farrell Profile"
          borderRadius={'100%'}
        />
      </Box>
      <Box justifyContent={'center'}>
        <Box justifyContent={'center'} w={'70%'} margin={'auto'}>
          <Heading
            as="h1"
            fontSize={{ lg: '8xl', base: '7xl' }}
            textAlign={'center'}
            className="cg-apple12 animated-2"
          >
            John Farrell.
          </Heading>
          <Text
            my={3}
            fontSize={{ lg: '3xl', base: '2xl' }}
            textAlign={'center'}
            className={'animated-3'}
          >
            Studying computer science at Brown University. My passion is in
            full-stack and software engineering. Lorem ipsum dolor sit amet,
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
        <Box mt={250}>
          <Flex justifyContent={'center'} width={'100%'} mt={4}>
            <BioCard />
          </Flex>
          <HStack>
            <Flex justifyContent={'center'} width={'100%'} m={'auto'} mt={4}>
              <LanguagesMainCard
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
                  { name: 'Cypress', color: 'teal' },
                  { name: 'Docker', color: 'blue' },
                  { name: 'SASS', color: 'pink' },
                  { name: 'Racket', color: 'red' },
                ]}
                size="2xl"
              />
            </Flex>
            <ContactCard />
          </HStack>
          <Box w={'90%'} m={'auto'} mt={40} mb={20}>
            <Heading
              as="h2"
              fontSize={{ lg: '8xl', base: '6xl' }}
              textAlign={'left'}
            >
              My{' '}
              <chakra.span className="cg-apple12 animated-2">
                Projects.
              </chakra.span>
            </Heading>
            <Text
              my={3}
              fontSize="2xl"
              color={'gray.500'}
              textAlign={'left'}
              className={'animated-3'}
              width={{ lg: '50%', base: '80%' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionCard;
