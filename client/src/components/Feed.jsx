import {
  Attachment,
  Image,
  SettingsVoice,
  VideoCameraFront,
} from '@mui/icons-material';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import axios from 'axios';
import Post from 'components/Post';
import Post_Card from 'components/Post';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Feed = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const [posts, setPosts] = useState(null);

  const styles = {
    input: {
      width: '85%',
      border: '0.2rem solid black',
      borderRadius: '2rem',
      marginLeft: '1rem',
      fontSize: '1.5rem',
      paddingLeft: '1.5rem',
    },
  };
  const getPosts = async () => {
    try {
      const response = await axios.get(`${url}/post`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.data;

      setPosts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  if (!posts) return null;

  return (
    // <Box bgcolor="yellow" flex={8} p={2}> // purana wala h

    <Box sx={{ width: { xs: '90%', sm: '55%' } }} p={2}>
      <Box
        width={'97%'}
        border="0.2rem solid black"
        p={'0.5rem'}
        borderRadius="1rem"
      >
        <Box sx={{ display: 'flex' }}>
          <Avatar
            sx={{ height: '4.5rem', width: '4.5rem' }}
            src={user.picturePath}
          />
          <input
            type="text"
            style={styles.input}
            placeholder="What on your mind  "
          />
        </Box>
        <Divider
          sx={{
            borderBottomWidth: 4,
            marginTop: '3%',
            marginBottom: '1%',
            borderColor: 'black',
          }}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Typography variant={'h5'} mr={'0.5rem'}>
              Image
            </Typography>
            <Image fontSize="medium" />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant={'h5'} mr={'0.5rem'}>
              Clip
            </Typography>
            <VideoCameraFront fontSize="medium" />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant={'h5'} mr={'0.5rem'}>
              Attachment
            </Typography>

            <Attachment fontSize="medium" />
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant={'h5'} mr={'0.5rem'}>
              Audio
            </Typography>
            <SettingsVoice fontSize="medium" />
          </Box>
          <Box>
            <Button
              variant="contained"
              size="medium"
              sx={{ borderRadius: '1.5rem' }}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
      {posts.map((p,i) => (
        <Post key={i} post={p} />
      ))}
    </Box>
  );
};

export default Feed;
