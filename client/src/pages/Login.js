import React from 'react';
import LoginCard from '../components/LoginCard/LoginCard';
import RegisterCard from '../components/RegisterCard/RegisterCard';
import "./Login.css"

const Login = () => {

    return(
        <main className="--Login-main">
            <LoginCard/>
            <RegisterCard/>
        </main>
    )
}

export default Login;