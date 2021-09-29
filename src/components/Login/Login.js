import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css';

function Login() {
    return (
        <div className="form-container">
            {/* <div>
                {/* <img src="" alt="Login Image"/>
            </div> */}

            <div className='login-container'>
                <input type="text" placeholder="Enter Username" name="name" required />
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button className="login" type="submit">Login</button>
                <h5>Not Signed up yet?</h5>
                <button className="signup"><Link to='/signup'>Sign Up</Link></button>
                {/* <label>
                    <input type="checkbox" checked="checked" name='remember'>Remember Me</input>
                </label> */}
            </div>
            <div className="container">
                <button type="button" className="cancelbtn"><Link to='/'>Cancel</Link></button>
                <span className="psw">Forgot <a href="/">password?</a></span>
            </div>
        </div>
    )
}

export default Login;