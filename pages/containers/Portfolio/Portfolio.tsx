import React from 'react';
import IntroductionCard from '../../components/IntroductionCard/IntroductionCard';
import Projects from '../../components/Projects/Projects';
import { Container, Wrap } from '@chakra-ui/react';

const Portfolio = (): React.ReactElement => {
  return (
    <Container
      maxW="2000px"
      width={{
        xl: '1200px',
        lg: '900px',
        base: '98%',
      }}
      margin="auto"
      mb={10}
      px={0}
    >
      <IntroductionCard />
      <Container
        px={0}
        maxW={{
          lg: '2000px',
          base: '650px',
        }}
      >
        <Projects />
      </Container>
    </Container>
  );
};

export default Portfolio;
