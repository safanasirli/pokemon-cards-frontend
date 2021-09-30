import '..//Signup/Signup.css';
import { Link } from 'react-router-dom';
import React from 'react';
const UserForm = ({ user, handleSumbit, handleChange }) => (
    <form onSubmit={ handleSumbit } className="signup-container">
        <div>
            <label htmlFor="name">Name</label>
            <input
                placeholder="Full Name"
                value= {user.name}
                name="name"
                onChange={handleChange}
                required
                id="name"
            />

            <label htmlFor="email">Email</label>
            <input
                placeholder="Email"
                value={user.email}
                name="email"
                onChange={handleChange}
                id="email"
            />
            <label htmlFor="password">Password</label>
            <input
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={handleChange}
                id="password"
            />
            <button type="submit">Submit</button>

            <h5>Already Signed up?</h5>
            <button className="signup"><Link to='/login'>Login</Link></button>

            <div className="container2">
                <button type="button" className="cancel-btn"><Link to='/'>Cancel</Link></button>
            </div>
        </div>
    </form>
);

export default UserForm;