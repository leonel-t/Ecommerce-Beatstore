import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"

import {searchProducts} from "../../../stores/products/products.actions"
// import Filter from "./Filter"

import SearchImg from "./Search.png"
import './MiddleSearchBar.css'

const MiddleSearchBar = () => {
    const [input, setInput] = useState({
        name: ""
    })    

    const { name } = input

    const dispatch = useDispatch();

    const history = useHistory();

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(input.name));
        history.push(`/results/${input.title}`)
    }

    return (
     <form onSubmit={handleSubmit} className='HomeBg'>
         <div className="SearchBarMiddle">
             <input onChange={handleChange} name="name" value={name} placeholder="busqueda..." />
                 <img onClick={handleSubmit} src={SearchImg} alt="SearchIcon" />

             {/* <Filter className="filtro" />  */}
         </div>
     </form>
    )
}


function mapStateToProps(state) {
    return {
    STORE_PRODUCTS: state
    };
  }

export default connect(
    mapStateToProps,
  )(MiddleSearchBar);