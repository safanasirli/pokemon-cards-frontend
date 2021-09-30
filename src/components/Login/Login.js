import React, { useState, useEffect } from 'react';
import './Login.css';
import avatarPic from '../../images/avatar.png';
import { APIURL } from '../../config.js';
import { useHistory } from 'react-router';
function Login({ logged, setLogged }) {
    // const history = useHistory

    // const reRoute = () => {
    //     history.push('/');
    // }
    {console.log(logged)}
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
                {/* Reroute would go into the onclick function */}
                <button type="submit" onClick={(e) => setLogged(true)}>Login</button>
                <button type="button" className="cancelbtn">Cancel</button>
        </div>
            <br/>
            
        </div>

        <div className="container"/>

    </form>
    )
}

export default Login;