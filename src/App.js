import {
  Box,
} from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Cloud from './components/Cloud';

import './App.css';

function App() {
  return (
    <Box>
      <Navbar />
      <Cloud text={"Welcome to Cloudt!"} />
    </Box>
  );
}

export default App;
