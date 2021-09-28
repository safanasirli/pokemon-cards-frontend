import React from 'react'
function Login() {
    return (
    <form>
        <div>
            {/* <img src="" alt="Login Image"/> */}
        </div>

        <div>
            <label>UserName</label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label for="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit">Login</button>
            <label>Remember Me </label>
                <input type="checkbox" checked="checked" name='remember'/>
           
        </div>

        <div className="container">
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot password? </span>
        </div>
    </form>
    )
}
