import React from 'react';
import './Login.css';
import avatarPic from '../../images/avatar.png';


function Login() {
    return(
    <form>
        <div className="imgcontainer">
            <img src={avatarPic} alt="avatar silouette" className="avatar"/>
        </div>
        {/* Give DIV a class, have DIV  */}
        {/* Use flexbox */}
        <div> 
            <div>
                <label>Username</label>
                <input type="text" placeholder="Enter Username" name="uname" required/>

                <label for ="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
        </div>
        <div>
                <button type="submit">Login</button>
                <button type="button" className="cancelbtn">Cancel</button>
        </div>
            <br/>
            
        </div>

        <div class="container">
            
                <label>
                    <input type="checkbox" checked="checked" name='remember'/>Remember Me
                </label>
            <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>
    )
}

export default Login;