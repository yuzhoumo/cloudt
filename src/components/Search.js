import {
  HStack,
  Input,
  IconButton
} from '@chakra-ui/react';

import { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { queryAddress, queryVerificationStatus, calculateReputation } from '../scripts/api.js';
import { useEnsResolver } from 'wagmi';

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

  const ensResolver = useEnsResolver({
    name: value,
    chaidId: 1,
    onSuccess(data) {
      setResults(data);
    },
  });

  const submitForm = () => {
    if (!value.endsWith(".eth")) {
      setResults(value);
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
  