import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ResetPassword.css';

const ResetPassword = () => {

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
        to_name: "",
        message: "",
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             message: generateResetCode(),
             [e.target.name]: e.target.value
        });
      };

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.send('service_b9mqvzg', 'template_j7o69td', input, 'user_G41cbN7fW7VHqXdcmtBXT')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
      
    return (
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <p>To reset your password you'll need a reset code we'll send to your mail inbox</p>
          <label className='label'>Enter your email</label>
          <input onChange={handleInputChange} type="email" name="to_name"/>
          <input type="submit" value="Send"/>
        </form>
      );
}

export default ResetPassword;