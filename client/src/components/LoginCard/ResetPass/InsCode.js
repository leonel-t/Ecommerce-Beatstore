import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InsCode.css';

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
        console.log(input)
        axios.put('http://localhost:3001/users', input)
            .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          });
        // e.reset()
    }

    return( 
    <div className="--ResetPass">
        <h2 className='--RPLabel' >First, insert you reset code</h2>
        <h2 className='--RPLabel' >then insert your new password</h2>
        <form className="--ResetPass" onSubmit={handleSubmit}>
            <input type="hidden" name="contact_number" />
            <label className='--RPLabel'>Code</label>
            <input className='--RPInput' onChange={handleInputChange} type="text" name="code" />
            <label className='--RPLabel'>Password</label>
            <input className='--RPInput' onChange={handleInputChange} type="password" name="pass" />
            <input clasName='--RPButton' type="submit" value="Send" />
        </form>
        <Link className='Link' to='/login'>Back to Sing In</Link>
    </div>
  ) 
}
export default InsCode;