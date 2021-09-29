import React from 'react';
import { Link } from 'react-router-dom'
import './Signup.css';

function Signup() {
    return (
        <div className="signup-container">
            <div className='login-container'>
                <input type="text" placeholder="Full Name" name="full-name" required />
                <input type="text" placeholder="Email" name="email" required />
                <input type="password" placeholder="Password" name="psw" required />
                <button className="login" type="submit">Sign Up</button>
                <h5>Already Signed up?</h5>
                <button className="signup"><Link to='/login'>Login</Link></button>
                {/* <label>
                    <input type="checkbox" checked="checked" name='remember'>Remember Me</input>
                </label> */}
            </div>
            <div className="container2">
                <button type="button" className="cancel-btn"><Link to='/'>Cancel</Link></button>
            </div>
        </div>
    );
}

export default Signup;