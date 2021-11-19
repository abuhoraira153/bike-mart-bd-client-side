import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [explore,setExplore] = useState([])
    useEffect(()=>{
        fetch('https://hidden-wildwood-78614.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setExplore(data))
    },[])
    return (
            <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography style={{color:"green",marginTop:"20px"}} variant="h4" component="div">
          Welcome to our explore page
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           explore.map(product =><Product
           key={product.id}
           product={product}
           ></Product>)
       }
      </Grid>
      </Container>
    </Box>
    );
};

export default Explore;