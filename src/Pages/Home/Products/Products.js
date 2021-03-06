import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://hidden-wildwood-78614.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
            <div id="products">
                <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography style={{color:"green",marginTop:"20px"}} variant="h4" component="div">
          Our Products
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           products.map(product =><Product
           key={product.id}
           product={product}
           ></Product>)
       }
      </Grid>
      </Container>
    </Box>
            </div>
    );
};

export default Products;