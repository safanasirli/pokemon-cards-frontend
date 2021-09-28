import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div>
            <Link to='/'>Shop</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    );
}

export default Nav;