import axios from 'axios';
import React, { useState } from 'react';
import './insCode.css';

const InsCode = () => {
    const [input, setInput] = useState({
        pass: "",
        code: ""
    });

    const handleInputChange =(e) => {
        setInput({
             ...input,
             [e.target.name]: e.target.value,
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/users/resetpass', input)
            .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          });
        e.reset()
    }

    return( 
    <div className="--ResetPass">
        <h2 className='--RPLabel' >To reset your password,</h2>
        <h2 className='--RPLabel' > we will send you a code to your mail inbox.</h2>
        <form className="--ResetPass" onSubmit={handleSubmit}>
            <input type="hidden" name="contact_number" />
            <label className='--RPLabel'>Code</label>
            <input className='--RPInput' onChange={handleInputChange} type="email" name="to_name" />
            <label className='--RPLabel'>Email</label>
            <input className='--RPInput' onChange={handleInputChange} type="email" name="to_name" />
            <input clasName='--RPButton' type="submit" value="Send" />
        </form>
    </div>
  ) 
}
export default InsCode;