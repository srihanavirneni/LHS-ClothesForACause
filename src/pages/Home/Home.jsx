import React from 'react';

import Hero from './containers/Hero';
import Brands from './containers/Brands';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <Brands />
        </div>
    );
};

export default Home;
