import React, { useEffect, useState } from 'react';
import "./Header.css";
import {connect} from "react-redux";
import {fetchAllProducts, getAllProductsSuccess} from "../../stores/products/products.actions"
import SearchImg from "./Search.png"

const SearchBar = ({fechtAllProductsEffect, STORE_PRODUCTS,getAllProducts}) =>{

    useEffect(()=>{
        fechtAllProductsEffect()
    },[fechtAllProductsEffect])

    const [input, setInput] = useState({
        title:""
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }



    const handleSubmit =  (e) => {
        e.preventDefault();
        getAllProducts(input.title)
    }

    const {title} = input

    return (
        <div>
        {STORE_PRODUCTS.productsReducers.productsLoading
        ?(
          <p>Cargando</p>
        )
        :( 
            <form onSubmit={handleSubmit} className="SearchBar" >               
                    <input placeholder="busqueda..." src={SearchImg} /> 
                    <button type="submit" name="title" value={title} onChange={handleChange}>Buscar</button>
                    <div>
            {/* // {STORE_PRODUCTS.productsReducers.products.map((title)=> {
            //             if(title === input.title){
            //                 return input.title
            //             }
            //             console.log(input.title)
            //         } 
            // )}     */}
                    </div>  
            </form> 
        )
        };
        </div>
        )
    }

function mapStateToProps(state) {
    return {
    STORE_PRODUCTS: state
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
    fechtAllProductsEffect: () => dispatch(fetchAllProducts()),
    getAllProducts: (product) => dispatch(getAllProductsSuccess(product))
    };
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);