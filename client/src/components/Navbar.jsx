import { DarkMode, Face6, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  
});

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '30px',
  marginRight:'30px'
  // [theme.breakpoints.up('sm')]: {
  //   display: 'flex',
  // },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  // [theme.breakpoints.up('sm')]: {
  //   display: 'none',
  // },
}));
const Navbar = () => {
  const [isopen, issetOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url=process.env.REACT_APP_BACKEND_URL;
  const user = useSelector((state) => state.user);
  // console.log(`${url}/assets/${user.picturePath}`);

  return (
    <AppBar position="sticky" sx={{ flexGrow:1, overflowX: 'hidden'}} >
      <StyledToolbar >
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Social Connect
        </Typography>
        <Face6 sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search 
         bgcolor={"background.default"}
         color={"text.primary"}>
          <InputBase
            sx={{
              width: '100%',
              color:'black'
            }}
            placeholder="search..."
          />
          <SearchIcon sx={{ color: 'black' }} />
        </Search>
        <Icons sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <DarkMode onClick={() => dispatch(setMode())} />
          <Badge badgeContent={123} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user.picturePath}
            onClick={(e) => issetOpen(true)}
          />
        </Icons>
        <UserBox
          onClick={(e) => issetOpen(true)}
          sx={{ display: { xs: 'flex', sm: 'none' }}}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={user.picturePath}
          />
          <Typography variant="span">{user.firstName} </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={isopen}
        onClose={(e) => issetOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={() => dispatch(setLogout())}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;