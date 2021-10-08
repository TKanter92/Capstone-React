import React from 'react';
import './Header.css';
import logo from '../../photos/logo.jpg';

function Header () {
    return (
        <React.Fragment>
            <div className="logo">
                <img src={logo} alt="logo" float="left" />
                <h1 align="center">Blue Paisley Designs</h1>
            </div>
        </React.Fragment>
    )
}

export default Header;