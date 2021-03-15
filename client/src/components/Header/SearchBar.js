import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {connect} from "react-redux";
import { useHistory } from "react-router-dom"

import { searchProducts } from "../../stores/products/products.actions"
import Filter from "./Filter"


import "./Header.css";

const SearchBar = () =>{

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        title:""
    })

    const {title} = input

    const history = useHistory();

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
            
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch(searchProducts(input.title));
    }

    
    return (
            <form onSubmit={handleSubmit}>               
                    <div className="SearchBar">
                    <input onChange={handleChange} name="title" value={title} placeholder="busqueda..." />
                    <div id="Glass"><img onClick={handleSubmit} alt="SearchIcon" /></div>
                    <Filter className="filtro" /> 
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
  )(SearchBar);