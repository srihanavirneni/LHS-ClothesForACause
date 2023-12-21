import React from 'react';

import Button from '../../../components/interface/Button';

import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <h1>
                    GIVING STYLES. <br /> SHARING SMILES.
                </h1>
                <h2>Empower change through fashion!</h2>
                <h3>
                    Join Clothes for a Cause, where every garment given becomes
                    a beacon of hope for local orphanages. Make a difference,
                    one piece of clothing at a time.
                </h3>
                <ul>
                    <Button to="/participate" bold>
                        Get Involved
                    </Button>
                    <Button to="/contact">Contact Us</Button>
                </ul>
            </div>
        </section>
    );
};

export default Hero;
