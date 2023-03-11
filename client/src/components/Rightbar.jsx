import { Box } from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box
      p={2}
      bgcolor="green"
      sx={{ display: { xs: 'none', sm: 'flex' }, width: '20%' }}
    >
      <Box position="fixed">Rightbar</Box>
    </Box>
  );
};

export default Rightbar;
