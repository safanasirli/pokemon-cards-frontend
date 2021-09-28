import React from 'react';
import './Login.css';
import avatarPic from '../../images/avatar.png';

function Login() {
    return(
    <form>
        <div className="imgcontainer">
            <img src={avatarPic} alt="avatar silouette" class="avatar"/>
        </div>
        
        <div>
            <label>UserName</label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for ="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name='remember'/>Remember Me
            </label>
        </div>

        <div class="container">
            <button type="button" className="cancelbtn">Cancel</button>
            <span class ="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>
    )
}

export default Login;