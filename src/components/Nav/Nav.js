import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'
import logo from '../../images/logo.png'
function Nav() {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
                <h1>Pokemon Sanctuary</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;