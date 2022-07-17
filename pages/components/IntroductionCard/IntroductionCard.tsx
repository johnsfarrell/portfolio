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
} from '@chakra-ui/react';
import Socials from '../Socials/Socials';
import Languages from '../Languages/Languages';

const IntroductionCard = (): React.ReactElement => {
  return (
    <Flex
      className="shadow-box-lg"
      flexDirection={{ lg: 'unset', base: 'column-reverse' }}
      alignItems={{ lg: 'unset', base: 'center' }}
    >
      <Box
        width={{
          xl: '50%',
          base: '100%',
        }}
        padding="10"
        pr={{ lg: 0 }}
      >
        <Box justifyContent={'center'}>
          <Heading
            as="h1"
            fontSize={{ lg: '6xl', base: '5xl' }}
            textAlign={{ lg: 'left', base: 'center' }}
          >
            HI, I&#39;M <chakra.span className="cg-generic">JOHN</chakra.span>
          </Heading>
          <Text
            my={3}
            fontSize="2xl"
            textAlign={{ lg: 'left', base: 'center' }}
          >
            Studying computer science at Brown University. My passion is in
            full-stack and software engineering.
          </Text>
          <Flex
            justifyContent={{
              lg: 'flex-start',
              base: 'center',
            }}
          >
            <Socials />
          </Flex>
        </Box>
        <Box mt={75}>
          <Heading fontSize="2xl" textAlign={{ lg: 'left', base: 'center' }}>
            I am always excited to learn!
          </Heading>
          <Flex
            justifyContent={{
              lg: 'flex-start',
              base: 'center',
            }}
            width={{ lg: 550, base: '100%' }}
            mt={4}
          >
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
              ]}
              size="2xl"
            />
          </Flex>
        </Box>
      </Box>
      <Box
        width="50%"
        padding={{
          xl: 10,
          lg: 5,
          base: 0,
        }}
        pt={{ lg: 10, base: 10 }}
        pl={{ lg: 0 }}
        display={{
          lg: 'grid',
        }}
        justifyContent="center"
      >
        <Image
          borderWidth={8}
          width="100%"
          dropShadow="xl"
          className="gradient-border-bg shadow-box-lg"
          src="https://avatars.githubusercontent.com/u/69059806?v=4"
          alt="John Farrell Profile"
          borderRadius={'100%'}
        />
      </Box>
    </Flex>
  );
};

export default IntroductionCard;
