import {
  Edit,
  GitHub,
  LinkedIn,
  People,
  Place,
  Upgrade,
  Work,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Leftbar = ({ userId }) => {
  const styles = {
    typo: {
      // color: 'blue',
      // textAlign: 'center',
      // display: 'flex',
      // justifyContent: 'center',
      position: 'relative',
      color: 'blue',
      textAlign: 'center',
      width: '96%',
    },
    paper: {
      padding: '10px',
      width: '100%',
      marginTop: '30%',

      // margin: 'auto',
    },
    icons: {
      marginRight: '5%',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      fontSize: '1.2rem',
      marginLeft: '3%',
      height: '3rem',
      width: '90%',
    },
  };

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [links, setLinks] = useState({
    linkedIn: '',
    github: '',
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const url = process.env.REACT_APP_BACKEND_URL;

  const getUser = async () => {
    // console.log(user);
    // console.log(`${url}/users/${userId}`);
    // console.log(token);
    try {
      const response = await axios.get(`${url}/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.data;

      setUser(data);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  const changeFormData = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setLinks({ ...links, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(links);
    const response = await axios.put(`${url}/users/${userId}`, links);
    //  const data = await response.data;
    //console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return <div>Loading...</div>;
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
        <Paper elevation={10} style={styles.paper}>
          <Typography variant={'h4'} style={styles.typo}>
            {user.firstName + ' ' + user.lastName}
          </Typography>
          <Typography mt={'5%'} variant={'h6'}>
            <People fontSize="large" style={styles.icons} />
            Number of freiend : {user.friends.length}
          </Typography>
          {/* <Typography mt={'5%'} variant={'h6'}> 
            Number of posts : 2
          </Typography> */}
          <Typography mt={'5%'} variant={'h6'}>
            <Work fontSize="large" style={styles.icons} />
            Occupation : {user.occupation}
          </Typography>
          <Typography mt={'5%'} variant={'h6'}>
            <Place fontSize="large" style={styles.icons} />
            Location : {user.location}
          </Typography>
          <Divider sx={{ borderBottomWidth: 4, marginTop: '3%' }} />

          <Typography mt={'5%'} variant={'h5'} style={styles.typo}>
            Links
          </Typography>
          <Typography
            mt={'5%'}
            variant={'h6'}
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => window.open(`${user.linkedIn}`, '_blank')}
          >
            <LinkedIn fontSize="large" style={styles.icons} />
            LinkedIn
            <Tooltip
              title="Edit"
              placement="top"
              onClick={(e) => setOpen(true)}
            >
              <Edit sx={{ marginLeft: 'auto' }} />
            </Tooltip>
          </Typography>
          <Typography
            mt={'5%'}
            variant={'h6'}
            sx={{ display: 'flex', alignItems: 'center' }}
            onClick={() => window.open(`${user.github}`, '_blank')}
          >
            <GitHub fontSize="large" style={styles.icons} />
            Github
            <Tooltip
              title="Edit"
              placement="top"
              onClick={(e) => setOpen(true)}
            >
              <Edit sx={{ marginLeft: 'auto' }} />
            </Tooltip>
          </Typography>
        </Paper>
      </Box>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={styles.modal}
      >
        <Box
          width={'40%'}
          height={'50%'}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <form onSubmit={handleSubmit}>
            <Typography variant="h4" textAlign={'center'}>
              Update Your Links Here
            </Typography>
            <Box mt={'5%'}>
              <LinkedIn fontSize="large" />
              <input
                type="text"
                placeholder="Enter Your LinkedIn Link"
                style={styles.input}
                name="linkedIn"
                value={links.linkedIn}
                onChange={changeFormData}
              />
            </Box>
            <Box mt={'10%'}>
              <GitHub fontSize="large" />
              <input
                type="text"
                placeholder="Enter Your Github Link"
                style={styles.input}
                name="github"
                value={links.github}
                onChange={changeFormData}
              />
            </Box>
            <Box mt={'10%'} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" variant="contained" size="large">
                Update
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default Leftbar;

// import { Box, Typography } from '@mui/material';
// import React from 'react';

// const Leftbar = () => {
//   const styles = {
//     typo: {
//       position: 'relative',
//       color: 'blue',
//       textAlign: 'center',
//       width: '100%',
//     },
//   };
//   return (
//     <Box
//       flex={3}
//       p={2}
//       bgcolor="red"
//       sx={{ display: { xs: 'none', sm: 'block' } }}
//     >
//       <Box position="fixed" maxWidth="20%">
//         <Typography variant="h4" style={styles.typo}>
//           Harshit
//         </Typography>
//       </Box>
//     </Box>
//   );
// };
// export default Leftbar;
