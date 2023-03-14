import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import Feed from './Feed';
import Leftbar from './Leftbar';
import Navber from './Navbar';
import Rightbar from './Rightbar';

const Home = ({ mode, setMode }) => {
  const userId = useSelector((state) => state.user._id);
  console.log(userId);
  return (
    <Box m={-1} sx={{ overflowX: 'hidden' }}>
      <Navber />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar userId={userId} />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;
