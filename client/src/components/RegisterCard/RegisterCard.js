import React, { useState } from 'react';
import "./RegisterCard.css"

const RegisterCard = () => {
    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        username: "",
        password:"",
        confirmPassword:"",
        email:"",
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value
        });
        setErrors(validate({
             ...input,
             [e.target.name]: e.target.value
        }));
      };
    const validate = (input) => {
        let errors = {};
        if (!input.username) {
            errors.username = 'Username is required';
        } else if (!/\S+@\S+\.\S+/.test(input.username)) {
             errors.username = 'Username is invalid';
        }
        if (!input.password) {
             errors.password = 'Password is required';
        } else if (!/(?=.*[0-9])/.test(input.password)) {
             errors.password = 'Password is invalid';
        }
        return errors;
    };
    return(
        <div className="--RegisterCard">
            <h2>Sign up</h2>
            <form className="--RegisterCard-form">
                <div className="--RegisterCard-form-email">
                    <p>Email</p>
                    <input className="--RegisterCard-form-input" type="text" placeholder="Type your email"
                        name="email" onChange={handleInputChange} value={input.email}/>
                </div>
                <div className="--RegisterCard-form-username">
                    <p>Username</p>
                    <input className="--RegisterCard-form-input" type="text" placeholder="Set a username for you profile"
                        name="username" onChange={handleInputChange} value={input.username}/>
                </div>
                <div className="--RegisterCard-form-password">
                    <p>Password</p>
                    <input className="--RegisterCard-form-input" type="password" placeholder="Type your password"
                        name="password" onChange={handleInputChange} value={input.password}/>
                </div>
                <div className="--RegisterCard-form-password-repeat">
                    <p>Confirm password</p>
                    <input className="--RegisterCard-form-input" type="password" placeholder="Type your password again"
                        name="confirmPassword" onChange={handleInputChange} value={input.confirmPassword}/>
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default RegisterCard;