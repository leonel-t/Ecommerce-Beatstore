import React, { useState } from "react"
import "./TabBilling.css"
import {useDispatch , useSelector} from "react-redux"
import axios from "axios"

const TabBilling = ({f}) => {
    const userId = useSelector(state=>Array.isArray(state.userReducers.user) ? state.userReducers.user : state.userReducers.user.data.user.id)
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        country: "",
        city: "",
        address: "",
        zipcode: "",
    });
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstName: input.firstname,
            lastName: input.lastname,
            country: input.country,
            city: input.city,
            address: input.address,
            zipCode: input.zipcode,
            userId: userId
        }
        await axios.get(`http://localhost:3001/infouser/${userId}`)
        .then(res=>{
            if(!res.data){
                axios.post("http://localhost:3001/infouser",data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }else{
                axios.put(`http://localhost:3001/infouser/${userId}`,data)
                .then((res) => console.log(res))
                .catch((err) => console.log(err))
            }
        })
        return f("method");
    }

    return (
        <div className="--TabBilling">
            <form className="--TabBilling-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="--TabBilling-form-items"><label>First name</label><input name="firstname" onChange={handleInputChange} value={input.firstname} required /></div>
                <div className="--TabBilling-form-items"><label>Last name</label><input name="lastname" onChange={handleInputChange} value={input.lastname} required /></div>
                <div className="--TabBilling-form-items"><label>Country</label><input name="country" onChange={handleInputChange} value={input.country} required /></div>
                <div className="--TabBilling-form-items"><label>City</label><input name="city" onChange={handleInputChange} value={input.city} required /></div>
                <div className="--TabBilling-form-items"><label>Address</label><input name="address" onChange={handleInputChange} value={input.address} required /></div>
                <div className="--TabBilling-form-items"><label>Zip code</label><input name="zipcode" onChange={handleInputChange} value={input.zipcode} required /></div>
                <button>Next</button>
            </form>
        </div>
    )
}

export default TabBilling;