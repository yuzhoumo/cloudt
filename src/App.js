import {
  Box,
  Heading,
  Center,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Cloud from './components/Cloud';
import Search from './components/Search';

import { useEffect, useState } from 'react';
import { useEnsResolver } from 'wagmi';

import { queryAddress, queryVerificationStatus } from './scripts/api.js';

import './App.css';

function App() {

  useEffect(() => {
    queryAddress("0x3A5bd1E37b099aE3386D13947b6a90d97675e5e3")
  }, []);

  const [isProfileView, setProfileView] = useState(false);
  const [stats, setStats] = useState(null);

  return (
    <Box>
      <Navbar />
      { !isProfileView ? <Cloud text={"Welcome to Cloudt!"} /> : (<><br /><br /></>) }
      <Center>
        <Box w="512px" ml={8}>
          <Search />
          { isProfileView ? (
            <Box>
              <Heading>name</Heading>
            </Box>
          ) : null }
        </Box>
      </Center>
    </Box>
  );
}

export default App;
