import { Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
      <Grid container spacing={2}>
        <Grid style={{backgroundColor:'purple',margin:'20px 0'}} item xs={12}>
            <Typography style={{padding:'15px',color:'white'}} variant="h3">
                &copy; Copyright Abu Horaira
            </Typography>
        </Grid>
      </Grid>
    
    );
};

export default Footer;