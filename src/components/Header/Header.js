import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {

    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
                <Link to={`/`}>
                    <h1>Pokemon Sanctuary</h1>
                </Link>
            </div>
        </div>
    );
}

export default Header;