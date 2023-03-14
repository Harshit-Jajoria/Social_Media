import { AddCircle, Info } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import { textAlign } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Rightbar = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const token = useSelector((state) => state.token);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${url}/users`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.data;
        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const styles = {
    scroll:{
    width: '100%',
    height: '10rem',
    overflowX: 'hidden',
    overflowY: 'auto',
    textAlign: 'center',
    marginTop: '5rem',
    // padding: '20px',
    }
  }
  if(!users) return null;
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
        <Box mt={'1rem'}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://th.bing.com/th/id/R.78cc584f5ed2deb6668cc645138c46a5?rik=qUajKAaUasu4sw&riu=http%3a%2f%2fdeniseleeyohn.com%2fwp-content%2fuploads%2f2014%2f04%2fRed-Bull.jpg&ehk=CJcDyRnbvfCU4RNL%2blYCPHpFTvlx%2fODudH6Iz6ajtmI%3d&risl=&pid=ImgRaw&r=0"
              title="green iguana"
            />

            <Box style={{ position: 'absolute', color: 'white', top: '5%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Info />
                <Typography ml={1}>Today's Sponsers</Typography>
              </Box>
            </Box>
            <CardContent sx={{ paddingLeft: 2, paddingBottom: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                Red Bull
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Red Bull is a brand of energy drinks created and owned by the
                Austrian company Red Bull GmbH. With a market share of 38%.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>

        <Box  style={styles.scroll}>
          { users.map((user)=>(
              <Box key={user._id}>
                <Box display={'flex'} >
                <Typography variant='h6'> {user.firstName} {user.lastName}</Typography>
                <AddCircle sx={{marginLeft:'auto'}}/>
                

          </Box>
          <Divider
          sx={{
            borderBottomWidth: 3,
            marginBottom:'0.5rem',
            marginTop: '0.4rem',
            borderColor: 'black',
          }}
        />
        </Box>
            ))}
             
         
          
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;

// import { Box } from '@mui/material'
// import React from 'react'

// const Rightbar = () => {
//   return (
//     <Box flex={2.5} p={2} bgcolor="green"sx={{ display: { xs: 'none', sm: 'block' } }}>
//     <Box position="fixed" >
//       Rightbar
//     </Box>
//   </Box>
//   )
// }

// export default Rightbar
