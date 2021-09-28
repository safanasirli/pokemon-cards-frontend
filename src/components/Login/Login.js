function Login() {
    return(
    <form>
        <div class>
            {/* <img src="" alt="Login Image"/> */}
        </div>
        
        <div>
            <label>UserName</label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for ="psw">Password</label>
            <input type="password" placeholder="Enter Password" name="psw" required/>

            <button type="submit">Login</button>
            <label>
                <input type="checkbox" checked="checked" name='remember'>Remember Me</input>
            </label>
        </div>

        <div class="container">
            <button type="button" class="cancelbtn">Cancel</button>
            <span class ="psw">Forgot <a href="#">password?</a></span>
        </div>
    </form>
    )
}

export default Login;