import React from 'react';

import homeImage1 from '../../../assets/images/home-image1.avif';
import clock from '../../../assets/icons/clock.png';

import './How.css';

const How = () => {
    return (
        <section className="how-section">
            <ul className="how-section__points-list">
                <li className="how-section__image">
                    <img src={homeImage1} alt="People volunteering" />
                </li>
                <li className="how-section__list-information">
                    <div className="list-information__header">
                        <img src={clock} alt="clock" />
                        <h2>2 hours of Volunteer Hours per donation</h2>
                    </div>
                    <p>
                        You can expect up to 2 hours for every piece of clothing
                        that you donate!
                    </p>
                </li>
            </ul>
            <ul className="how-section__points-list">
                <li className="how-section__list-information how-info2">
                    <div className="list-information__header">
                        <img src={clock} alt="clock" />
                        <h2>2 hours of Volunteer Hours per donation</h2>
                    </div>
                    <p>
                        You can expect up to 2 hours for every piece of clothing
                        that you donate!
                    </p>
                </li>
                <li className="how-section__image">
                    <img src={homeImage1} alt="People volunteering" />
                </li>
            </ul>
        </section>
    );
};

export default How;
