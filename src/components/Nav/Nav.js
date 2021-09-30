import React, { useState } from 'react';
import logo from '../../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

function Nav() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="nav_container">
            <div className="nav-container">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                    <h1>Pokemon Sanctuary</h1>
                </div>
                <div className="hamburger-container">
                    <MenuIcon className="hamburger" style={{ width: "50px", height: "50px", fontWeight: "800" }} onClick={showSidebar} />
                </div>
            </div>
            <div className="sidebar-container">
                {sidebar ?
                    <Sidebar /> : ""
                }
            </div>
        </div>
    );
}

export default Nav;