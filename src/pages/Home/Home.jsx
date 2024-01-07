import React from 'react';

import Hero from './containers/Hero';
import Brands from './containers/Brands';
import Credibility from './containers/Credibility';
import How from './containers/How';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <Credibility />
            <How />
        </div>
    );
};

export default Home;
