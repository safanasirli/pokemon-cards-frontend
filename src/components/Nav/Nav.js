import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'
function Nav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <Link to='/'>Shop</Link>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
            <Link to='/cart'>Cart</Link>
        <div className="nav-container">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
                <h1>Pokemon Sanctuary</h1>
            </div>
            <div className="navbar">
                <ul className="nav-links">
                    <li className="nav-item"><Link to='/'>Shop</Link></li>
                    <li className="nav-item"><Link to='/login'>Login</Link></li>
                    <li className="nav-item"><Link to='/signup'>Signup</Link></li>
                </ul>
            </div>
            <div>
                <MenuIcon className="hamburger" style={{ width: "20px", height: "20px" }} onClick={showSidebar} />
                {sidebar ?
                    <Sidebar /> : ""
                }
            </div>
        </div>
    );
}

export default Nav;