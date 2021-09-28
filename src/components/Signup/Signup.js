import React from 'react';
import './Signup.css'
function Signup() {
    return (
        <form>
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label for="email">Email</label>
                <input type="text" placeholder="Enter Email" name="email" required/>

                <label for="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <label for="psw-repeat">Repeat Password</label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>

                <label>
                    <input type="checkbox" checked="checked" name="remember"/> Remember Me
                </label>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default Signup;