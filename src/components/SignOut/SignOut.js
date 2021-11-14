import React from "react";
import {signout,is_auth} from '../../auth/auth';
import { useState } from "react";



const SignOut = ({setLogedIn})=>{

    const handleSignOutBtn = async (e) => {
        let response = await signout();
        console.log(response);
        if (response == "success") {
            setLogedIn(false);
        }
    };

    return (
        <div >
            <button onClick= {handleSignOutBtn} > Sign Out</button>
        </div>
    )
};


export default SignOut;