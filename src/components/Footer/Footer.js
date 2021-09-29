import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-row">
            <div className="col">
                <h2>Company</h2>
                <ul className="footer-list">
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="col">
                <h2>FAQ</h2>
                <ul className="footer-list">
                    <li>Payment Policy</li>
                    <li>Shipping Terms</li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;