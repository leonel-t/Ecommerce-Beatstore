import React, { useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";
import "./Login.css"


const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password:""
    });

    const history = useHistory();
    var tokenVerify = localStorage.getItem("token")

    if(tokenVerify){
        setTimeout(()=> history.push('/profile'),100)
    }
   
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

            let email = JSON.parse(user.config.data)
            console.log(user.data)
            localStorage.setItem("token",user.data.token)
            localStorage.setItem("email", email.email)
            
            if(user.data.token){
                return history.push('/profile')
            }else{
                console.log("Error de inicio de sesion")
            }
            
        })   
       .catch((error)=>{
            console.log(error)
        })
    }
    const loginGitHub = async (e) => {
        e.preventDefault();  
        window.open('http://localhost:3001/auth/github/', "_self")

    }

    const loginGoogle = async (e) => {
        e.preventDefault();
        window.open('http://localhost:3001/auth/google/', "_self")
    }

    return(
        <div className="--LoginCard">
            <div className="--LoginAllCard">
            <h2 >Sign in to continue</h2>
            <form onSubmit={handleSubmit} className="--LoginCard-form">
                <div className="--LoginCard-form-identification">
                    <p className="name">Email</p>
                    <input className="--LoginCard-form-input" 
                        type="email" 
                        placeholder="Type your email"
                        name="email" 
                        required
                        onChange={handleInputChange} 
                        value={input.email}/>
                </div>
                <div className="--LoginCard-form-credential">
                    <p className="name">Password</p>
                    <input className="--LoginCard-form-input" 
                        type="password" 
                        placeholder="Type your password"
                        name="password" 
                        required
                        onChange={handleInputChange} 
                        value={input.password}/>
                </div>
                <div className="--Submit-buttons">
                    <button type='submit'>Sign in</button>
                    <button id="github" onClick={loginGitHub} />
                    <button id='google' onClick={loginGoogle} />
                </div>

            </form>
            <div className="foot">
                <span>Don't have an account?</span>
                
                <Link className="signup" to="/register">Sign up</Link>  
            </div>
            
            </div>
        </div>
    )
}

export default Login;