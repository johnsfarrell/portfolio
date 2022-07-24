import React from 'react';
import {
  Box,
  Text,
  Flex,
  Link,
  chakra,
  IconButton,
  Spacer,
  Center,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Languages, { LanguagesCardProject } from '../Languages/Languages';

type Language = {
  name: string;
  color: string;
};
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
      h={'fit-content'}
      px={8}
      py={4}
      flexWrap={'wrap'}
      alignContent={'space-between'}
      borderRadius={25}
      bg="gray.800"
    >
      <Box>
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
            <chakra.span>{props.name}</chakra.span>
          </Link>
          <chakra.span fontSize="sm" color="gray.400">
            {props.date}
          </chakra.span>
        </Flex>
        <chakra.p mt={2} color="gray.300">
          {props.description}
        </chakra.p>
      </Box>

      <Box my={4}>
        <LanguagesCardProject languages={props.languages} size="md" />
      </Box>

      <Box display={'contents'}>
        <Center>
          <Text
            color="gray.100"
            bg="gray.600"
            px={2}
            fontSize="sm"
            fontWeight="bold"
            borderRadius={7}
          >
            {props.contribution && props.contribution.toUpperCase()}
          </Text>
        </Center>
        <Spacer />
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
      </Box>
    </Flex>
  );
};

export default ProjectCard;
