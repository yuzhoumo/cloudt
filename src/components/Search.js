import {
  HStack,
  Input,
  IconButton
} from '@chakra-ui/react';

import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { queryAddress, queryVerificationStatus, calculateReputation } from '../scripts/api.js';
import { ethers }  from 'ethers';

export default function Search({setStats, setVerified, setProfileView}) {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const setResults = (address) => {
    const res = queryAddress(address);
    res.then((val) => {
      setStats(val);
      const res2 = queryVerificationStatus(val.id);
      res2.then((val2) => setVerified(val2.onChainIdentity.worldcoin.isHuman));
    });
    console.log(res);
    setProfileView(true);
  }

  const submitForm = () => {
    if (!value.endsWith(".eth")) {
      setResults(value);
    } else {
      let provider = new ethers.providers.AlchemyProvider({ name: 'homestead', chainId: 1 }, 'UuUIg4H93f-Bz5qs91SuBrro7TW3UShO');
      let address = provider.resolveName(value);
      address.then((val) => setResults(val));
    }
  }

  return (
    <HStack mt={5}>
      <Input
        bg="white"
        variant="outline"
        placeholder="Enter Ethereum address or ENS domain"
        value={value}
        onChange={handleInputChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            submitForm();
          }
        }}
      />
      <IconButton
        colorScheme='orange'
        aria-label='Search'
        icon={<SearchIcon />}
        onClick={submitForm}
      />
    </HStack>
  );
};
  