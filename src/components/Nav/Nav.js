import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <img className="logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c31e.png" alt="logo" />
                <h1>Pokemon Sanctuary</h1>
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to='/'>Shop</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign up</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;