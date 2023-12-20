import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../interface/Button';
import './NavLinks.css';

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <ul className="nav-links__centered">
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" exact>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sponsors">Sponsors</NavLink>
                </li>
            </ul>
            <ul className="nav-links__right">
                <div className="nav-links__cta">
                    <Button to="/contact" bold>
                        Contact Us
                    </Button>
                </div>
                <div className="nav-links__cta">
                    <Button to="/participate" bold>
                        Get Involved
                    </Button>
                </div>
            </ul>
        </ul>
    );
};

export default NavLinks;
