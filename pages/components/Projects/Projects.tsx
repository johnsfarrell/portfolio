import React from 'react';
import { Heading, SimpleGrid, Box, Flex, chakra, Wrap } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';

const Projects = (): React.ReactElement => {
  return (
    <Box margin="auto" my={4} width="95%">
      <Flex>
        <SimpleGrid columns={3} gap={7}>
          <Wrap>
            <ProjectCard
              date="September &#39;22"
              name="Jacket Tracker"
              description="We use cookies and similar technologies to help personalise content, tailor and measure ads, and provide a better experience. By clicking OK or turning an option on in Cookie Preferences, you agree to this, as outlined in our Cookie Policy. To change preferences or withdraw consent, please update your Cookie Preferences."
              githubLink="https://github.com/johnsfarrell/calcproject"
              liveLink="https://johnsfarrell.github.io/calcproject/"
              languages={[
                { name: 'TypeScript', color: 'blue' },
                { name: 'MySQL', color: 'orange' },
                { name: 'BootStrap5', color: 'blue' },
                { name: 'PHP', color: 'teal' },
                { name: 'NodeJS', color: 'green' },
                { name: 'Cypress', color: 'gray' },
              ]}
              color="yellow"
              contribution="COOP"
            />
          </Wrap>
          <Wrap>
            <ProjectCard
              date="July &#39;22"
              name="Markup IO"
              description="We use cookies and similar technologies to help personalise content, tailor and measure ads, and provide a better experience. By clicking OK or turning an option on in Cookie Preferences, you agree to this, as outlined in our Cookie Policy. To change preferences or withdraw consent, please update your Cookie Preferences."
              githubLink="https://github.com/"
              liveLink="https://github.com/"
              languages={[
                { name: 'JavaScript', color: 'yellow' },
                { name: 'TypeScript', color: 'blue' },
                { name: 'Chakra', color: 'teal' },
                { name: 'GraphQL', color: 'pink' },
                { name: 'React', color: 'blue' },
                { name: 'PostgreSQL', color: 'teal' },
                { name: 'NodeJS', color: 'green' },
                { name: 'NextJS', color: 'orange' },
                { name: 'Cypress', color: 'gray' },
                { name: 'Docker', color: 'blue' },
                { name: 'SASS', color: 'pink' },
              ]}
              color="green"
              contribution="INTERN"
            />
          </Wrap>
          <ProjectCard
            date="June &#39;22"
            name="Calculator"
            description="This was my high school project for AP Calculus BC. Using Texas Instruments as an inspiration, I strived to produce a calculator of similar style and function. With only a few weeks (late May to early June), I was in a crunch to see how much I could do. A good introduction to front-end web development and creating web applications."
            githubLink="https://github.com/johnsfarrell/calcproject"
            liveLink="https://johnsfarrell.github.io/calcproject/"
            languages={[
              { name: 'Vanilla', color: 'gray' },
              { name: 'HTML', color: 'red' },
              { name: 'CSS', color: 'blue' },
              { name: 'JavaScript', color: 'yellow' },
            ]}
            color="blue"
            contribution="SOLO"
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Projects;
