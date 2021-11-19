import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CardContent, CardMedia, Grid, Typography, Card, Container } from '@mui/material';
import useAuth from './../../hooks/useAuth';

const Purchase = () => {
    const{_id} = useParams()
    const [product, setProduct] = useState({})
    const {user} = useAuth()
        useEffect(()=>{
        fetch(`https://hidden-wildwood-78614.herokuapp.com/products/${_id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item >
        <Card sx={{ width:'380px', height:'550px' }}>
            <CardMedia
        component="img"
        height="194"
        image={product.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          Price : {product.price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
              {user.displayName}
          </Typography>
        </Grid>
      </Grid>
            
        </Container>
    );
};

export default Purchase;