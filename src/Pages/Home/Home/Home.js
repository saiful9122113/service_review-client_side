import React from 'react';
import PopularCollection from '../../PopularCollection/PopularCollection';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LimitedService from '../LimitedService/LimitedService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LimitedService></LimitedService>
            <PopularCollection></PopularCollection>
            <About></About>           
        </div>
    );
};

export default Home;