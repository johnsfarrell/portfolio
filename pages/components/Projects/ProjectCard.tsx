import React from 'react';
import { Box, Text, Flex, Link, chakra, IconButton } from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Language from '../Languages/Language';
import Languages from '../Languages/Languages';

const ProjectCard = (props: {
  date: string;
  name: string;
  description: string;
  githubLink: string;
  liveLink: string;
  languages: Language[];
  color: string;
  contribution: string;
}): React.ReactElement => {
  return (
    <Flex
      pb={50}
      px={{
        lg: 5,
        base: 0,
      }}
      pt={0}
      w="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        px={8}
        py={4}
        rounded="lg"
        className="shadow-box-lg"
        bg="gray.800"
        width="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Link
            href={props.liveLink}
            fontSize="2xl"
            color="white"
            fontWeight="700"
            _hover={{
              color: 'gray.200',
              textDecor: 'underline',
            }}
          >
            <chakra.span className={'cg-' + props.color}>
              {props.name.toUpperCase()}
            </chakra.span>
          </Link>
          <chakra.span fontSize="sm" color="gray.400">
            {props.date}
          </chakra.span>
        </Flex>

        <Box mt={2}>
          <chakra.p mt={2} color="gray.300">
            {props.description}
          </chakra.p>
        </Box>
        <Box mt={4}>
          <Languages languages={props.languages} size="md" />
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Text
            color="gray.100"
            bg="gray.600"
            px={2}
            fontSize="sm"
            fontWeight="bold"
            borderRadius={7}
          >
            {props.contribution.toUpperCase()}
          </Text>

          <Flex alignItems="center">
            <Link href={props.githubLink} isExternal>
              <IconButton
                color="gray.600"
                _hover={{ color: 'gray.400' }}
                bg="transparent"
                aria-label={props.name + 'github'}
                icon={<FaGithub />}
                fontSize={27}
              />
              <chakra.span display="none">Github Link</chakra.span>
            </Link>
            <Link href={props.liveLink} isExternal>
              <IconButton
                color="gray.600"
                _hover={{ color: 'gray.400' }}
                bg="transparent"
                size="sm"
                aria-label={props.name + 'external'}
                icon={<FaExternalLinkAlt />}
                fontSize={22}
              />
              <chakra.span display="none">External Website Link</chakra.span>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
