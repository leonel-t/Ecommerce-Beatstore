import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
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

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(input)
        emailjs.send('service_b9mqvzg', 'template_j7o69td', input, 'user_G41cbN7fW7VHqXdcmtBXT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        axios.post('http://localhost:3001/users/resetcode/', input)
            .then((text) => {
              console.log(text);
          }, (error) => {
              console.log(error);
          });
        // e.reset()
    }
    
    return( 
        <div className="--ResetPass">
            <h2 className='--RPLabel' >To reset your password,</h2>
            <h2 className='--RPLabel' > we will send you a code to your mail inbox.</h2>
            <form className="--ResetPass" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label className='--RPLabel'>Email</label>
                <input className='--RPInput' onChange={handleInputChange} type="email" name="email" />
                <input clasName='--RPButton' type="submit" value="Send" />
            </form>
            <button>
              <Link className='Link' to='/inscode'>Already have the Code?</Link>
            </button>
        </div>
    )
}

export default ResetPass;