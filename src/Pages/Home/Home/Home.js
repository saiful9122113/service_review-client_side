import React from 'react';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import LimitedService from '../LimitedService/LimitedService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Services></Services> */}
            <LimitedService></LimitedService>
            <About></About>           
        </div>
    );
};

export default Home;