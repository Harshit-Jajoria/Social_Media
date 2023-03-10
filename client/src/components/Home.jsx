import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Feed from './Feed';
import Leftbar from './Leftbar';
import Navber from './Navbar';
import Rightbar from './Rightbar';

const Home = ({ mode, setMode }) => {
  return (
    <Box m={-1} sx={{overflowX:'hidden'}}>
      <Navber/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
};

export default Home;
