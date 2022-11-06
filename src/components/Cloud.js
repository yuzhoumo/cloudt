import {
    Box,
    Center,
    Image,
    Heading,
  } from '@chakra-ui/react';

import '../App.css';

export default function Cloud({text}) {
  return (
    <Box mt={16}>
      <Center className="floating">
        <Image boxSize="200" src="/cloud.png" />
      </Center>
      <Center>
        <Heading mt={10} ml={8}>
          {text}
        </Heading>
      </Center>
    </Box>
  );
};