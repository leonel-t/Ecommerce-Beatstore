import "./Login.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import logoIcon from "../../../assets/images/icon-logo.png"
import LoginGithubImg from "../../../assets/images/login/github-login.png"
const Login = ({t}) => {

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
            localStorage.setItem("refreshToken",user.data.refreshToken)
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
                <div className="--login-logo">
                    <div className="--login-logo-col">
                        <img width="70px" height="60px" src={logoIcon} alt=""></img>
                    </div>
                    <div className="--login-logo-col">
                    <h1>BeatStore</h1>
                    </div>
                </div>
            <form onSubmit={handleSubmit} className="--LoginCard-form">
                <div className="--LoginCard-form-identification">
                    <p className="name">{t("page.login.emailTitle")}</p>
                    <input className="--LoginCard-form-input" 
                        type="email" 
                       
                        placeholder={t("page.login.emailPlaceholder")}
                        name="email" 
                        required
                        onChange={handleInputChange} 
                        value={input.email}/>
                </div>
                <div className="--LoginCard-form-credential">
                    <p className="name">{t("page.login.passwordTitle")}</p>
                    <input className="--LoginCard-form-input" 
                        type="password" 
                        placeholder={t("page.login.passwordPlaceholder")}
                        name="password" 
                        required
                        onChange={handleInputChange} 
                        value={input.password}/>
                </div>
                <div className="--Submit-buttons">
                    <button type='submit'>{t("page.login.signinButton")}</button>
             <div>
                    <img width="200px" onClick={loginGitHub}  src={LoginGithubImg} alt="GitHub SingIn"></img>
                    <img width="200px" onClick={loginGoogle} src={LoginGithubImg} alt="GitHub SingIn"></img>
             </div>
                    {/* <button id="github" onClick={loginGitHub} />
                    <button id='google' onClick={loginGoogle} /> */}
                </div>

            </form>
            <div className="foot">
                <Link to='/register' className='Link'>{t("page.login.dontAcount")}</Link>
                <Link to ='/resetpass' className='Link'>Forgot your password?</Link>
                <Link className="signup" to="/register">{t("page.login.signupButton")}</Link>  
            </div>
            </div>
        </div>
    )
}

export default withTranslation()(Login);