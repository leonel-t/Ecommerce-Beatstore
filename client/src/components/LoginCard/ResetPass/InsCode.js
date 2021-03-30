import axios from 'axios';
import React, { useState } from 'react';
import logoIcon from "../../../assets/images/icon-logo.png";
import { Link } from 'react-router-dom';
import './InsCode.css';

const InsCode = () => {
    
    const [input, setInput] = useState({
        pass: "",
        code: "",
        confPass: "",
    });

    const [errors, setError] = useState({
        code: "",
        confPass: ""
    })

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value,
        });
      };

    const validate = () => {
        let isValid = true;
        if(input.pass !== input.confPass){
            setError({
                ...errors,
                confPass: "Passwords don´t match"
            })
            isValid = false;
        }
        if(input.code.length !== 9){
            setError({
                ...errors,
                code: "Reset Code is invalid or expired"
            })
            isValid = false;
        }
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validate()){
            axios.put('http://localhost:3001/users', input)
            .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          });
        }
        // e.reset()
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
            <h2 className='--RPLabel' >First, insert you reset code</h2>
            <h2 className='--RPLabel' >then, insert your new password</h2>
            <form className="--ResetPass" onSubmit={handleSubmit}>
                <input type="hidden" name="contact_number" />
                <label className='name'>Reset Code</label>
                <input 
                    placeholder='Type your Reset Code'
                    className='--RPInput' 
                    onChange={handleInputChange} 
                    type="text" 
                    name="code" 
                    required/>
                {errors.code && errors.code === 'Reset Code is invalid or expired'
                    ?
                    (<p className="alert alert-danger">{errors.code}</p> ):
                    (
                      <p>  </p>
                    )
                     }
                <label className='name'>Password</label>
                <input className='--RPInput' 
                    placeholder='Type your new Password'
                    onChange={handleInputChange} 
                    type="password" 
                    name="pass"
                    id="pass" 
                    required/>
                <label className='name'>Confirm Password</label>
                <input className='--RPInput' 
                    placeholder='Confirm Pasword' 
                    onChange={handleInputChange} 
                    type="password" 
                    name="confPass" 
                    id="confPass"
                    required/>
                {errors.confPass && errors.confPass === 'Passwords don´t match'
                    ?
                    (<p className="alert alert-danger">{errors.confPass}</p> ):
                    (
                      <p>  </p>
                    )
                     }
                <div className="--RPButtons">
                    <button type='submit'>Reset Password</button>
                </div>
            </form>
            <Link className='Link' to='/login'>Back to Sing In</Link>
        </div>
    </div>
  ) 
}
export default InsCode;