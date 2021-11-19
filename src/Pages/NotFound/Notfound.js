import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound/404.jpg'

const Notfound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <Link to = "/"><Button style={{padding:'20px'}} variant="contained">Go Back</Button></Link>
        </div>
    );
};

export default Notfound;