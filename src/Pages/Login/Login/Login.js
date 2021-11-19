import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData,setLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth()

    const location = useLocation();
    const history = useHistory();


    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    return (
      <Container>
          <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography style={{color:'green',marginTop:'20px'}} variant="h4" gutterBottom>
                Please Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{width:'25%',m:1}} 
            id="standard-basic"  
            label="your email" 
            name="email"
            onBlur={handleOnChange}
            variant="standard" />
            <br/>
            <TextField 
            sx={{width:'25%',m:1}} 
            id="standard-basic" 
            type="password" 
            label="password" 
            name="password"
            onBlur={handleOnChange}
            variant="standard" />
            <br/>
            <Button variant="contained" sx={{width:'25%',m:1}} type="submit">Login</Button>
            <br/>
            <NavLink
            style = {{textDecoration:'none'}} 
            to="/register">
            <Button variant="text">new user? please register</Button>
            </NavLink>
            {
                isLoading && <CircularProgress />
            }
            {user?.email && <Alert severity="success">
            Login successfully
            </Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
            </form>
        </Grid>
        
      </Grid>
      </Container>
    
    );
};

export default Login;