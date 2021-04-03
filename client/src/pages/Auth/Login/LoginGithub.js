import axios from 'axios';
import React from 'react';
import {useParams, useHistory } from "react-router-dom";
import {serverUrl} from '../../../auxiliar/variables';

const LoginGitHub = () =>{
    const history = useHistory();

    const {email,password} = useParams();

    axios.post(`${serverUrl}/users/login`, {email,password}).then((user)=>{
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