import { Box, Typography } from '@mui/material';
import React from 'react';

const Leftbar = () => {
  const styles = {
    typo: { 
      display: '',
      textAlign: 'center', 
    },
  };
  return (
    <Box
      flex={3}
      p={2}
      bgcolor="red"
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="fixed" maxWidth="20%">
        <Typography variant='h4'  style={styles.typo}>
          Harshit
        </Typography>
      </Box>
    </Box>
  );
};

export default Leftbar;
