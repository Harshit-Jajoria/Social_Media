import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Feed from './Feed';
import Leftbar from './Leftbar';
import Navber from './Navbar';
import Rightbar from './Rightbar';

const Home = ({ mode, setMode }) => {
  return (
    <Box m={-1} sx={{ overflowX: 'hidden' }}>
      <Navber />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar userId={'6408a0c6e25c0060f7031d0e'}/>
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;
