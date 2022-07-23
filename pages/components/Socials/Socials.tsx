import React from 'react';
import {
  Button,
  Link,
  ButtonGroup,
  IconButton,
  chakra,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaFileContract } from 'react-icons/fa';

const Socials = (): React.ReactElement => {
  return (
    <ButtonGroup gap="4" flexWrap="wrap" justifyContent="center">
      <Link
        href="https://www.linkedin.com/in/johnsfarrell/"
        isExternal
        className="shadow-box-sm"
      >
        <IconButton
          size="lg"
          colorScheme="gray"
          aria-label="linkedin"
          icon={<FaLinkedinIn />}
          fontSize="xx-large"
          href="https://www.linkedin.com/in/johnsfarrell/"
        />
        <chakra.span display="none">LinkedIn Link</chakra.span>
      </Link>
      <Link
        href="https://github.com/johnsfarrell"
        isExternal
        className="shadow-box-sm"
      >
        <IconButton
          size="lg"
          colorScheme="gray"
          aria-label="github"
          icon={<FaGithub />}
          fontSize="xx-large"
        />
        <chakra.span display="none">GitHub Link</chakra.span>
      </Link>
      <Link
        href="https://drive.google.com/file/d/1xmZWYiOLbqmUQMW7szmgTy896eGhxBFZ/view"
        isExternal
        className="shadow-box-sm"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Button
          size="lg"
          rightIcon={<FaFileContract fontSize="xx-large" />}
          colorScheme="gray"
          fontWeight="bold"
          fontFamily="mono"
          fontSize="xl"
        >
          RESUME&nbsp;
        </Button>
        <chakra.span display="none">Resume Link</chakra.span>
      </Link>
    </ButtonGroup>
  );
};

export default Socials;
