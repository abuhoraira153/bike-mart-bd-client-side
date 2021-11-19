import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {NavLink } from 'react-router-dom';

const Product = (props) => {
    const{_id,img,name,description,price} = props.product;
    return (
        <Grid sx={{my:3}} item xs={4} sm={4} md={4} >
            <Card sx={{ width:'380px', height:'550px' }}>
            <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Price : {price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <NavLink style={{textDecoration:'none'}} to={`/purchase/${_id}`}>
        <Button sx = {{mt:4}} variant="contained">Buy Now</Button>
        </NavLink>
      </CardContent>
    </Card>
        </Grid>
    );
};

export default Product;