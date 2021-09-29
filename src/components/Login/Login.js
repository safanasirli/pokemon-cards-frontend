
function Login() {
    return (
        <form>
            {/* <div>
                {/* <img src="" alt="Login Image"/>
            </div> */}

            <div className='login-container'>
                <label>UserName</label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label htmlFor="psw">Password</label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name='remember'>Remember Me</input>
                </label>
            </div>

            <div className="container">
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="/">password?</a></span>
            </div>
        </form>
    )
}

export default Login;