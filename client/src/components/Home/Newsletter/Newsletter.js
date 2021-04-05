import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';
import './newsletter.scss';

const Newsletter = ()=>{

    const [input, setInput] = useState({
        email: ""
    })

    const handleInputChange = async (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        console.log(input)
        e.preventDefault()
        await axios.post('http://localhost:3001/newsletter', input)
            .then((text) => {
                console.log(text)
                if(text.data === 'You are already suscribed')
                {
                    return swal('You are already suscribed')
                }
                return swal('Succesfully subscribed to the Newsletter')
            })
    }

    return (
        <div className='--Newsletter-main'>
            <h2 className='--Newsletter-main-h2'>Join our monthly Newsletter and get 10% off your next Purchase!</h2>
            <form className="--Newsletter-form" onSubmit={handleSubmit}>
                <label className='name'></label>
                    <input 
                        placeholder='Type your Email'
                        className="--RPInput" 
                        onChange={handleInputChange} 
                        type="email" 
                        name="email" 
                        required/>
                <div className="--RPButtons">
                    <button type='submit'>Suscribe</button>
                </div>
            </form>
        </div>
    )
};

export default Newsletter;