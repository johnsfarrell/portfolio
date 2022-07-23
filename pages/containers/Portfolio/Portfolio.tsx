import React from 'react';
import IntroductionCard from '../../components/IntroductionCard/IntroductionCard';
import Projects from '../../components/Projects/Projects';
import { Container, Wrap } from '@chakra-ui/react';
import Navbar from '../../components/NavBar/NavBar';

const Portfolio = (): React.ReactElement => {
  return (
    <Container maxW="810px" margin="auto" mb={10} px={0}>
      <IntroductionCard />
      <Container px={0} maxW={'2000px'}>
        <Projects />
      </Container>
    </Container>
  );
};

export default Portfolio;
