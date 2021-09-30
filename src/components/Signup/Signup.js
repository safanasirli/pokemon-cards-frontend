import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router';
import { APIURL } from '../../config';
import UserForm from '../Data/UserForm';

const Signup = () => {
    const initialUserState ={
        name: '',
        email: '',
        password: ''
    };

    const[user, setUser] = useState(initialUserState);
    const[createId, setCreateId] = useState(null);
    const [error, setError] = useState(false);

    const handleChange = event => {
        event.persist();
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const url = `${APIURL}/users`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body : JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            setCreateId(data._id);
        })
        .catch(() => {
            setError(true);
        });
    };

    return (
        <UserForm
        user={ user }
        handleChange= { handleChange }
        handleSubmit= { handleSubmit }
        />
    );
}

export default Signup;