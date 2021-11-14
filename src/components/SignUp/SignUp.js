import React from "react";
import { signup, is_auth } from '../../auth/auth';
import { useState } from "react";

const SignUp = ({ setLogedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => { setUsername(e.target.value) };
    const handlePasswordChange = (e) => { setPassword(e.target.value) };
    const handleConfirmPasswordChange =(e)=>{setConfirmPassword(e.target.value)};
    const handleSignUpBtn = async (e) => {
        let response = await signup({ username, password , confirm_password});
        console.log(response);
        if (response == "success") {
            setLogedIn(true);
        }
    };
    return (
        <>
            <input onChange={handleUsernameChange} value={username} type="text" placeholder="username" />
            <input onChange={handlePasswordChange} value={password} type="password" placeholder="password" />
            <input onChange={handleConfirmPasswordChange} value={confirm_password} type="password" placeholder="confirm password" />
            <button onClick={handleSignUpBtn} >Sign UP</button>
        </>
    );
};

export default SignUp;