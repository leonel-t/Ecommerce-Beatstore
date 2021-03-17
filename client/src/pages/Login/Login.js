import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import "./Login.css"

const Login = () => {
    const history = useHistory();
    const [input, setInput] = useState({
        email: "",
        password:""
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Esto me trae el input', input)
        let newUser = {
             email:input.email,
             password: input.password,
            }
       
        await axios.post('http://localhost:3001/users/login', newUser)
        .then((user)=>{            
            localStorage.setItem("token",user.data.token)
            console.log(user)
            return history.push('/')
        })   
       .catch((error)=>{
            console.log(error)
        })
    }
    

    return(
        <div className="--LoginCard">
            <h2>Sign in to continue</h2>
            <form onSubmit={handleSubmit} className="--LoginCard-form">
                <div className="--LoginCard-form-identification">
                    <p>Email</p>
                    <input className="--LoginCard-form-input" 
                        type="email" 
                        placeholder="Type your username or email"
                        name="email" 
                        onChange={handleInputChange} 
                        value={input.email}/>
                </div>
                <div className="--LoginCard-form-credential">
                    <p>Password</p>
                    <input className="--LoginCard-form-input" 
                        type="password" 
                        placeholder="Type your password"
                        name="password" 
                        onChange={handleInputChange} 
                        value={input.password}/>
                </div>
                <button type='submit'>Sign in</button>
            </form>
        </div>
    )
}

export default Login;