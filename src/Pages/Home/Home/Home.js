import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;