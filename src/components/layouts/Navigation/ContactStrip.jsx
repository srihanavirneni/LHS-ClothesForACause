import React from 'react';

import pin from '../../../assets/icons/pin.png';
import groupme from '../../../assets/icons/socialmedia/groupme.png';
import instagram from '../../../assets/icons/socialmedia/instagram.png';
import email from '../../../assets/icons/email.png';

import './ContactStrip.css';

const ContactStrip = (props) => {
    return (
        <div className="contact-strip">
            <ul className="contact-strip__location">
                <li>
                    <img src={pin} alt="location" />
                    <p>Lambert High School - 805 Nichols Rd, Suwanee, GA</p>
                </li>
            </ul>
            <ul className="contact-strip__media">
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://groupme.com/join_group/97867568/HdrNAj94"
                    >
                        <img src={groupme} alt="Group Me" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/lambert_clothesforacause/"
                    >
                        <img src={instagram} alt="Group Me" />
                    </a>
                </li>
                <li>
                    <a href="mailto:lambert.clothesforacause@gmail.com">
                        <img src={email} alt="Email" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactStrip;
