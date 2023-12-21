import React from 'react';

import students from '../../../assets/icons/students.png';
import happy from '../../../assets/icons/happy.png';
import logo from '../../../assets/icons/logo.png';
import './Credibility.css';

const Credibility = () => {
    return (
        <section className="credibility-section">
            <ul className="credibility-section__points-list">
                <li>
                    <img src={students} alt="students" />
                    <h2>Supported by many students just like you!</h2>
                    <p>
                        Our mission is an overall group effort, ran entirely by
                        students of Lambert High School. Your contributions will
                        always be appreciated!
                    </p>
                </li>
                <li>
                    <img src={logo} alt="shirt" />
                    <h2>
                        Volunteer hours for every piece of clothing you donate.
                    </h2>
                    <p>
                        For every piece of clothing / garment that you
                        personally donate, you can expect up to 2 hours granted
                        to you!
                    </p>
                </li>
                <li>
                    <img src={happy} alt="happy face" />
                    <h2>
                        Happy kids from many orphanages because of your
                        contributions.
                    </h2>
                    <p>
                        Sharing your clothes and garments to children in
                        need can spread kindness and happiness! That is our
                        vision and hope, of course!
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Credibility;
