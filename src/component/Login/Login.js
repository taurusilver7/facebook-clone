/* eslint-disable no-unused-vars */
import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider } from '../../firebase';
import { actionTypes } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        // sign in 
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result.user)
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' alt='logo' />
                <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
            </div>
            <Button type='submit' onClick={signIn} />
        </div>
    )
}

export default Login
