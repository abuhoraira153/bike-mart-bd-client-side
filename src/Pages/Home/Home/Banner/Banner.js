import { Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import banner from '../../../../images/banner/3.jfif'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{mt:2}} style={{backgroundColor:"#F0E9D2"}}>
        <Grid item xs={12} md={6}>
          <img style={{width:'600px',borderRadius:'15px',marginBottom:'12px'}} src={banner} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{p:5}}>
          <Typography style={{color:"#193498"}} variant="h3">
            Welcome to Bike Mart
          </Typography>
          <Typography style={{color:"#F0A500"}} variant ="h5">
              You can buy any kind fo Bike.
          </Typography>
          <Typography variant="body2" gutterBottom>
          If you are looking for new and used motorbikes for sale in the BD why not visit Bike Mart 4 All? We are based in Malvern and we have a wealth of experience in supplying quality new and used motorbikes and motocross bikes to customers throughout the BD. Take a look at what we have for sale today. As BD based motorcycle dealers, you have a hand-picked selection of quality new and used motorbikes and scooters for sale to choose from. All bikes are competitively priced and professionally presented. We now also stock a selection of brand new bikes from Suzuki, Benelli and Royal Enfield so please browse our stock list. At Motorbikes 4 All, as well as having over 350 new and used motorbikes and scooters in stock we offer service, repairs, tyres, clothing and accessories at very competitive prices. All work is carried out by our fully qualifed technicians so that our customers can feel confident that their bike is in capable hands. Our friendly staff will go the extra mile to guarantee that you receive the advice you need.
      </Typography>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Banner;