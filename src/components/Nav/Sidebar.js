import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css'
function Sidebar() {
    return (
        <div>
            <ul className="nav-items">
                <li className="nav-link"><Link to='/'>SHOP</Link></li>
                <li className="nav-link"><Link to='/login'>LOGIN</Link></li>
                <li className="nav-link"><Link to='/signup'>SIGN UP</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;