import React, { useState } from 'react';
import "./Header.css";
import {connect} from "react-redux";
import {searchProducts} from "../../stores/products/products.actions"
import SearchImg from "./Search.png"
import Filter from "./Filter"
import { useDispatch } from 'react-redux'


const SearchBar = ({searchAllProductsEffect, STORE_PRODUCTS,getAllProducts}) =>{


    const dispatch = useDispatch();

    const [input, setInput] = useState({
        title:""
    })

    const {title} = input

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
            
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch(searchProducts(input.title))
    }

    
    return (
        // <div>
        // {STORE_PRODUCTS.productsReducers.productsLoading
        // ?(
        //   <p>LOADING...</p>
        // )
        // :( 
            <form onSubmit={handleSubmit}>               
                    <div className="SearchBar">
                    <input onChange={handleChange} name="title" value={title} placeholder="busqueda..." />
                    <img onClick={handleSubmit} id="SearchImg" src={SearchImg} alt="SearchIcon" /><p id="barra">|</p>
                        <Filter className="filtro" /> 
                    </div>
 
            </form> 
        // )
        // };
        // </div>
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