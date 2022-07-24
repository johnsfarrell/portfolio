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
  Stack,
} from '@chakra-ui/react';
import Socials from '../Socials/Socials';
import { LanguagesMainCard } from '../Languages/Languages';
import BioCard from '../BioCard/BioCard';
import ContactCard from '../ContactCard/ContactCard';
import IntroductionSlider from './IntroductionSlider';

const IntroductionCard = (): React.ReactElement => {
  return (
    <Box>
      <IntroductionSlider />
      <Box mt={250}>
        <Flex justifyContent={'center'} width={'100%'} mt={4}>
          <BioCard />
        </Flex>
        <Flex
          wrap={{ lg: 'nowrap', base: 'wrap' }}
          alignItems={'stretch'}
          p={3}
          dir={'column'}
        >
          <Flex width={{ lg: '60%', base: '100%' }} mb={{ lg: 0, base: 3 }}>
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
          <Flex w={3} />
          <Flex width={{ lg: '40%', base: '100%' }}>
            <ContactCard />
          </Flex>
        </Flex>
        <Box w={'90%'} m={'auto'} mt={40} mb={20}>
          <Heading
            as="h2"
            fontSize={{ lg: '8xl', base: '6xl' }}
            textAlign={'left'}
          >
            My <chakra.span className="cg-apple12">Projects.</chakra.span>
          </Heading>
          <Text
            my={3}
            fontSize="2xl"
            color={'gray.500'}
            textAlign={'left'}
            width={{ lg: '50%', base: '90%' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionCard;
