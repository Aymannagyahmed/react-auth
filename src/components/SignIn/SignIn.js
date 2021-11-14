
import React from "react";
import { signin, is_auth } from '../../auth/auth';
import { useState } from "react";


const SignIn = ({ setLogedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (e) => { setUsername(e.target.value) };
    const handlePasswordChange = (e) => { setPassword(e.target.value) };
    const handleSigninBtn = async (e) => {
        let response = await signin({ username, password });
        console.log(response);
        if (response == "success") {
            setLogedIn(true);
        }
    };
    return (
        <>
            <input onChange={handleUsernameChange} value={username} type="text" placeholder="username" />
            <input onChange={handlePasswordChange} value={password} type="password" placeholder="password" />
            <button onClick={handleSigninBtn} >sign in</button>

        </>
    );
};

export default SignIn;