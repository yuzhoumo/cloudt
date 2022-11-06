import {
  Avatar,
  Box,
  Heading,
  Center,
  VStack,
  Image,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Cloud from './components/Cloud';
import Search from './components/Search';
import {calculateReputation} from './scripts/api';
import { useState } from 'react';

import './App.css';

function App() {

  const [isProfileView, setProfileView] = useState(false);
  const [isVerified, setVerified] = useState(false);
  const [stats, setStats] = useState(null);

  return (
    <Box>
      <Navbar />
      { !isProfileView ? <Cloud text={"Welcome to Cloudt!"} /> : (<><br /><br /></>) }
      <Center>
        <Box w="512px" ml={8}>
          <Search setStats={setStats} setVerified={setVerified} setProfileView={setProfileView} />
          { isProfileView ? (
            <Box mt={10}>
              <VStack>
                {stats ? (
                  <Box
                    w="100%"
                    borderRadius={6}
                    padding={6}
                    bgColor={'#ffadad'}
                    mb={12}
                  >
                    <Avatar size='2xl' src={stats.picture.original.url} />
                    <Heading>{stats.handle}</Heading>
                    <Heading mt={12}>👌 Reputation: {calculateReputation(stats, isVerified)}</Heading>
                    <Heading>🌎 WorldCoin Verified: {isVerified ? "Yes" : "No"}</Heading>
                    <Heading mt={12}>Collects: {stats.stats.totalCollects}</Heading>
                    <Heading>Comments: {stats.stats.totalComments}</Heading>
                    <Heading>Followers: {stats.stats.totalFollowers}</Heading>
                    <Heading>Mirrors: {stats.stats.totalMirrors}</Heading>
                    <Heading>Posts: {stats.stats.totalPosts}</Heading>
                    <Heading>Publications: {stats.stats.totalPublications}</Heading>
                  </Box>
                ): (<Heading>Loading...</Heading>)}
              </VStack>
            </Box>
          ) : null }
        </Box>
      </Center>
    </Box>
  );
}

export default App;
