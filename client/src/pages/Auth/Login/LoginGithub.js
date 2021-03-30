import axios from 'axios';
import React from 'react';
import {useParams, useHistory } from "react-router-dom";

const LoginGitHub = () =>{
    const history = useHistory();

    const {email,password} = useParams();

    axios.post("http://localhost:3001/users/login", {email,password}).then((user)=>{
        let email2 = JSON.parse(user.config.data)

        localStorage.setItem("token",user.data.token)
        localStorage.setItem("email", email2.email)

        history.push("/")
    })
    return (

        <div>
            <h1>HOLA</h1>
        </div>
    )
}
  
  
export default LoginGitHub;