import { Face6, Mail, Notifications } from '@mui/icons-material';
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

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
   backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
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
const Navbar = ({mode,setMode}) => {
  const [isopen, issetOpen] = useState(false);
  return (
    <AppBar position="sticky" sx={{ flexGrow:1, overflowX: 'hidden'}} >
      <StyledToolbar >
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          Social Connect
        </Typography>
        <Face6 sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase
            sx={{
              width: '100%',
            }}
            placeholder="search..."
          />
          <SearchIcon sx={{ color: 'black' }} />
        </Search>
        <Icons sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Badge badgeContent={123} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => issetOpen(true)}
          />
        </Icons>
        <UserBox
          onClick={(e) => issetOpen(true)}
          sx={{ display: { xs: 'flex', sm: 'none' }}}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
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
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;