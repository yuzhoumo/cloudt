import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  Box,
  Heading,
  HStack,
} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <HStack mt={8} ml={8}>
      <Heading
        align="center"
        fontSize="xl"
        fontWeight="extrabold"
        ml={4}
        mr={4}
      >
        CLOUDT.XYZ
      </Heading>
      <Box position="absolute" right={8}>
        <ConnectButton />
      </Box>
    </HStack>
  );
};
