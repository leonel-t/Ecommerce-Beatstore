import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ResetPass.css';

const ResetPass = () => {
    const [input, setInput] = useState({
        name: "",
        to_name: "",
        message:'9039485'
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value
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
    }
    
    return( 
        <div className="--ResetPass">
            <h2 className='--RPLabel' >To reset your password,</h2>
            <h2 className='--RPLabel' > we will send you a code to your mail inbox.</h2>
            <form className="--ResetPass" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label className='--RPLabel'>Email</label>
                <input className='--RPInput' onChange={handleInputChange} type="email" name="to_name" />
                <input clasName='--RPButton' type="submit" value="Send" />
            </form>
        </div>
    )
}

export default ResetPass;