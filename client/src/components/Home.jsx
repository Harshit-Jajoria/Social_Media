import { Box } from '@mui/material';
import React from 'react';
import Navber from './Navbar';

const Home = ({ mode, setMode }) => {
  return (
    <Box m={-1} sx={{overflowX:'hidden'}}>
      <Navber/>
    </Box>
  );
};

export default Home;
