import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import './Login.css';
import Instagram from './Assets/icons8-instagram-50.png';
import Facebook from './Assets/icons8-facebook-50.png';
import Twitter from './Assets/icons8-twitter-50.png';

const loginUser = gql`
mutation($username:String!, $password:String!) {
  loginUser(username: $username, password: $password) {
    ok
    token
    refreshToken
    errors {
      path
      message
    }
  }
}
`;

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [handleLogin, {
        // loading, error, 
        data }] = useMutation(loginUser, {
            variables: {
                username: username,
                password: password
            }
        })

    // if (loading) return <div>LOADING</div>;
    // if (error) return <div>ERROR</div>;
    if (data) {
        const { ok, token, refreshToken } = data.loginUser;
        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            props.history.push('/feed');
        }
    }

    return (
        <div id='login-wrapper'>
            <div id='login-container'>
                <div id='login-title'>Log In</div>
                <hr className='login-horizontal-rule' />
                <input type="text" className='login-input' placeholder='Username or Email' onChange={e => setUsername(e.target.value)} value={username} />
                <input type="password" className='login-input' placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />
                <button className='input-btn' onClick={handleLogin}>Log In</button>
            </div>
            <div id='login-alt-container'>
                <div id='login-alt-title'>or log in with</div>
                <div id='login-alt-icons-cont'>
                    <img src={Instagram} alt="instagram" className='login-alt-icons' />
                    <img src={Facebook} alt="instagram" className='login-alt-icons' />
                    <img src={Twitter} alt="instagram" className='login-alt-icons' />
                </div>
            </div>
        </div>
    )
};

export default Login;