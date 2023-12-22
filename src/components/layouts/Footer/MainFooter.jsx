import React from 'react';

import NavLinks from '../Navigation/NavLinks';
import Copyright from './Copyright';

import groupme from '../../../assets/icons/socialmedia/groupme.png';
import instagram from '../../../assets/icons/socialmedia/instagram.png';
import email from '../../../assets/icons/email.png';
import whitelogo from '../../../assets/icons/whitelogo.png';
import './MainFooter.css';

const MainFooter = () => {
    return (
        <React.Fragment>
            <footer className="main-footer">
                <ul className="main-footer__content-list">
                    <li className="main-footer__general-info">
                        <img src={whitelogo} alt="logo" />
                        <h3>LHS Clothes For A Cause</h3>
                        <p>
                            Clothes For A Cause's mission is to distribute
                            clothing to local orphanages in Georgia, providing
                            fresh clothing for children in need to wear!
                        </p>
                    </li>
                    <li className="main-footer__technical-info">
                        <ul>
                            <li>
                                <h5>ADDRESS</h5>
                                <p>805 Nichols Rd, Suwanee, GA</p>
                            </li>
                            <li>
                                <h5>FOLLOW</h5>
                                <ul className="main-footer__technical-info__media-list">
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
                                            <img
                                                src={instagram}
                                                alt="Group Me"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:lambert.clothesforacause@gmail.com">
                                            <img src={email} alt="Email" />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="main-footer__navigation">
                        <NavLinks footer />
                    </li>
                </ul>
            </footer>
            <Copyright />
        </React.Fragment>
    );
};

export default MainFooter;
