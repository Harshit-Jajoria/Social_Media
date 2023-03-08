import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      // In this case we don not need to use the spread operator beacause toolkit say
      //just change the value you want to change i will handle the other values
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) state.user.friends = action.payload.friends;
      else console.log('user friend does not exist');
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) {
          return action.payload.post;
        } else {
          return post;
        }
      });
      state.posts = updatedPosts;
    },
  },
});
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
