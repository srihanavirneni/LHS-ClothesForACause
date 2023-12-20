import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../interface/Button';
import './NavLinks.css';

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/sponsors">Sponsors</NavLink>
            </li>
            <li>
                <NavLink to="/participate">Get Involved</NavLink>
            </li>
            <div className="nav-links__cta">
                <Button to="/contact">
                    Contact Us
                </Button>
            </div>
        </ul>
    );
};

export default NavLinks;
