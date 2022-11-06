import {
  HStack,
  Input,
  IconButton
} from '@chakra-ui/react';

import { SearchIcon } from '@chakra-ui/icons';

export default function Search() {
  return (
    <HStack mt={5}>
      <Input
        bg="white"
        variant="outline"
        placeholder="Enter Ethereum address or ENS domain"
        onKeyDown={e => {
          if (e.key === 'Enter') {
          }
        }}
      />
      <IconButton
        colorScheme='orange'
        aria-label='Search'
        icon={<SearchIcon />}
      />
    </HStack>
  );
};
  