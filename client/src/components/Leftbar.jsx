import { Box, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Leftbar = ({userId}) => {
  const styles = {
    typo: {
      // color: 'blue',
      // textAlign: 'center',
      // display: 'flex',
      // justifyContent: 'center',
      position: "relative",
      color: "blue",
      textAlign: "center",
      width: "100%"
    
    },
    paper: {
      padding: '10px',
      width: '100%',
    marginTop: '20%',

      // margin: 'auto',
    },
  };

  const [user,setUser]=useState(null)
  const navigate=useNavigate()
  const token=useSelector((state) => state.token);
  const url=process.env.REACT_APP_BACKEND_URL;
  const getUser=async()=>{
    const response = await fetch(`${url}/users/${userId}`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` }
    })
  }
  return (
    <Box
      p={2}
      sx={{
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'column',
        width: '25%',
      }}
    >
        <Box sx={{ width: '22%', position: 'fixed' }}>
      <Paper variant="outlined" elevation={10} style={styles.paper}>
          <Typography variant={'h4'} style={styles.typo}>
            Harshit Jajoria
          </Typography>
          <Typography mt={'5%'} variant={'h6'}>Number of freiend : 55</Typography>
          <Typography mt={'5%'} variant={'h6'}>Number of posts : 22</Typography>
          <Typography mt={'5%'} variant={'h6'}>Occupation  : student</Typography>   
          <Typography variant={'h5'} style={styles.typo}>
            Links
          </Typography>
          <Box>
            
          </Box>




      </Paper>
        </Box>
    </Box>
  );
};

export default Leftbar;
