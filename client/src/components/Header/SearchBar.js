import React, { useState } from 'react';
import {connect} from "react-redux";
import { searchProducts } from "../../stores/products/products.actions"
import SearchImg from "./Search.png"
import Filter from "./Filter"
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import "./Header.css";

const SearchBar = ({STORE_PRODUCTS}) =>{

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
        history.push(`/results/${input.title}`)
    }

    
    return (
            <form onSubmit={handleSubmit}>               
                    <div className="SearchBar">
                    <input onChange={handleChange} name="title" value={title} placeholder="busqueda..." />
                    <div id="SearchImg"><img onClick={handleSubmit} src={SearchImg} alt="SearchIcon" /></div>
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