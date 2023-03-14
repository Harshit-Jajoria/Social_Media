import {
  Comment,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Post = (post) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const token = useSelector((state) => state.token);
  const [user, setUser] = useState(null);
  //  console.log(post.post);
  const {
    firstName,
    lastName,
    description,
    picturePath,
    createdAt,
    likes,
    comments,
    userId,
  } = post.post;
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${url}/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.data;
        // console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  if (!user) return null;

  return (
    <Card sx={{ marginTop: '2rem' }}>
      <CardHeader
        avatar={
          <Avatar
            src={`${url}/assets/${user.picturePath}`}
            sx={{ bgcolor: 'red' }}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={firstName}
        subheader={createdAt}
      />
      <CardMedia
        component="img"
        height="500rem"
        image={`${url}/assets/${picturePath}`}
        alt="hello world"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>

        <IconButton aria-label="comment" sx={{ marginLeft: 'auto' }}>
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
