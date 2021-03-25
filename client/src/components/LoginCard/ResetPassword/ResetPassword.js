import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ResetPassword.css';
import axios from 'axios';

const ResetPassword = () => {

    const [input, setInput] = useState({
        email: "",
        resetCode: 0,
        sent: false
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value
        });
      };

    const sendEmail = (e) => {
        e.preventDefault();
        let data = {
            email: input.email,
            resetCode: input.resetCode
        }
        console.log(input)
        console.log(data)
        axios.post('http://localhost:3001/passreset', data)
        .then(res => {
            setInput({
                ...input,
                sent: true
            })
        }).catch(err => {
            console.log(err)
        })
        e.target.reset()
    }
      
    return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <p>To reset your password you'll need a reset code we'll send to your mail inbox</p>
          <label className='label'>Enter your email</label>
          <input onChange={handleInputChange} type="email" name="email"/>
          <input type="submit" value="Send" />
        </form>
      );
}

export default ResetPassword;