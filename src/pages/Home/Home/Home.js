import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import SeeSocial from '../SeeSocial/SeeSocial';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner />
            <Destinations />
            <SeeSocial />
            <Subscribe />
        </div>
    );
};

export default Home;