import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData] = useState({})
    const {user, registerUser, isLoading, authError} = useAuth()
    // const location = useLocation();
    const history = useHistory()


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Password did not match!!!')
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history)
        e.preventDefault()
    }
    return (
        <Container>
          <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography style={{color:'green',marginTop:'20px'}} variant="h4" gutterBottom>
                Please Register
            </Typography>
            { !isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField 
            sx={{width:'25%',m:1}} 
            id="standard-basic"  
            label="Your name" 
            name="name"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/>
            <TextField 
            sx={{width:'25%',m:1}} 
            id="standard-basic"  
            label="Your email" 
            name="email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/>
            <TextField 
            sx={{width:'25%',m:1}} 
            id="standard-basic" 
            type="password" 
            label="Your password" 
            name="password"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/>
            <TextField 
            sx={{width:'25%',m:1}} 
            id="standard-basic" 
            type="password" 
            label="ReType your password" 
            name="password2"
            onBlur={handleOnBlur}
            variant="standard" />
            <br/>
            <Button variant="contained" sx={{width:'25%',m:1}} type="submit">Register</Button>
            <br/>
            <NavLink
            style = {{textDecoration:'none'}} 
            to="/login">
            <Button variant="text">Already Register? please Login</Button>
            </NavLink>
            </form>}
            {isLoading && <CircularProgress></CircularProgress>}
            {user?.email && <Alert severity="success">
            User created successfully
            </Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        
      </Grid>
      </Container>
    );
};

export default Register;