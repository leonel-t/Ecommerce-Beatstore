
import React, { useState } from 'react';
import './MiddleSearchBar.css'
import { useDispatch } from 'react-redux'
import {searchProducts} from "../../../stores/products/products.actions"

const MiddleSearchBar = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: ""
    })

    const { name } = input

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(input.name))
    }


    return (
        <form onSubmit={handleSubmit} className='HomeBg'>
            <div className="SearchBarMiddle">
                <input onChange={handleChange} name="name" value={name} placeholder="busqueda..." />
            </div>
        </form>
        )
}


export default MiddleSearchBar;