import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import logoIcon from "../../../assets/images/icon-logo.png";
import './ResetPass.css';
import axios from 'axios';

const ResetPass = () => {
    
    function generateResetCode() {
        let length = 9,
          charset =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }

    const [input, setInput] = useState({
        name: "",
        email: "",
        code: ""
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value,
             code: generateResetCode()
        });
      };

    const sendEmail = async (e) => {
        e.preventDefault();
        console.log(input)
        emailjs.send('service_b9mqvzg', 'template_j7o69td', input, 'user_G41cbN7fW7VHqXdcmtBXT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        axios.post('http://localhost:3001/users/resetcode', input)
            .then((text) => {
              console.log(text);
          }, (error) => {
              console.log(error.message);
          });
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
            <h2>To reset your password,</h2>
            <h2> we will send you a code to your mail inbox.</h2>
            <form className="--ResetPass" onSubmit={sendEmail}>
              <label className='name'>Email</label>
              <input placeholder='Type your Email' className="--RPInput" onChange={handleInputChange} type="email" name="email" required/>
              <div className="--RPButtons">
                <button type='submit'>Send Code</button>
              </div>
            </form>
            <Link className='Link' to='/inscode'>Already have the Code?</Link>
          </div>
        </div>
    )
}

export default ResetPass;