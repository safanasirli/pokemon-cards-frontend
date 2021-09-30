import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {

    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
                <h1>Pokemon Sanctuary</h1>
            </div>
        </div>
    );
}

export default Header;