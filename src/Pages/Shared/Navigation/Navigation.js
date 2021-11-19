import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, logOut} = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bike Mart
          </Typography>
          <NavLink style={{textDecoration:'none',color:'white'}} to="#home">
          <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink style={{textDecoration:'none',color:'white'}} to="#products">
          <Button color="inherit"><p href="#products">Products</p></Button>
          </NavLink>
          <NavLink style={{textDecoration:'none',color:'white'}} to="/explore">
          <Button color="inherit">Explore</Button>
          <NavLink style={{textDecoration:'none',color:'white'}} to="/reviews">
          <Button color="inherit">Reviews</Button>
          </NavLink>
          </NavLink>
          {
            user?.email ?
            <Box>
              <NavLink style={{textDecoration:'none',color:'white'}} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </NavLink>
                <Button onClick={logOut} color="inherit">Logout</Button>
                <Typography>
                  {user.displayName}
                </Typography>
            </Box>
            :
            <NavLink style={{textDecoration:'none',color:'white'}} to="/login">
          <Button color="inherit">Login</Button>
          </NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;