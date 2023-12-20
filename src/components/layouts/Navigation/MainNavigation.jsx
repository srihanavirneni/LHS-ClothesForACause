import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../../interface/Backdrop';

import menu from '../../../assets/icons/menu.png';
import logo from '../../../assets/icons/logo.png';
import './MainNavigation.css';

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-links">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <header className="main-header">
                <div className='brand'>
                    <img className="logo" src={logo} alt="Logo" />
                    <h2>
                        <Link to="/">
                            <ul>
                                <li className='brand__sub-title'>Lambert High School</li>
                                <li>Clothes For A Cause</li>
                            </ul>
                        </Link>
                    </h2>
                </div>
                <nav className="main-navigation__nav-links">
                    <NavLinks />
                </nav>
                <button
                    className="main-navigation__menu-btn"
                    onClick={openDrawerHandler}
                >
                    <img src={menu} alt="Menu" />
                </button>
            </header>
        </React.Fragment>
    );
};

export default MainNavigation;
