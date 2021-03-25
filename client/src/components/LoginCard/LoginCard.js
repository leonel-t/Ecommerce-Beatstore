import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginCard.css"

const LoginCard = () => {
    const [input, setInput] = useState({
        user: "",
        password:""
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value
        });
      };
    
    return(
        <div className="--LoginCard">
            <h2>Sign in to continue</h2>
            <form className="--LoginCard-form">
                <div className="--LoginCard-form-identification">
                    <p>Email or username</p>
                    <input className="--LoginCard-form-input" type="text" placeholder="Type your username or email"
                        name="user" onChange={handleInputChange} value={input.user}/>
                </div>
                <div className="--LoginCard-form-credential">
                    <p>Password</p>
                    <input className="--LoginCard-form-input" type="password" placeholder="Type your password"
                        name="password" onChange={handleInputChange} value={input.password}/>
                </div>
                <button>Sign in</button>
                <Link>Forgot your password?</Link>
            </form>
        </div>
    )
}

export default LoginCard;