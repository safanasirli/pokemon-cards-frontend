import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css'
function Sidebar() {
    return (
        <div>
            <ul className="nav-items">
                <li className="nav-link"><Link to='/'>Shop</Link></li>
                <li className="nav-link"><Link to='/login'>Login</Link></li>
                <li className="nav-link"><Link to='/signup'>Signup</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;