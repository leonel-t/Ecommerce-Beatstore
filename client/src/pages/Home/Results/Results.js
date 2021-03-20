
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"

import {searchProducts} from "../../../stores/products/products.actions"
import "./Results.css"

const Results = ({STORE_PRODUCTS, SEARCH_EFFECT}) => {

    const {name} = useParams();

        useEffect(()=>{
            SEARCH_EFFECT(name)
        },[SEARCH_EFFECT,name])



    return (
        <div className='Muestra'>
            <h1>Results :</h1>
                {STORE_PRODUCTS.productsReducers.searchResults.map((product,id)=>{
                    console.log(product.name) 
                    return (
                          <div className="encontrado">  
                          <div className="ListAll">                            
                              <ul>    
                                <li> Name: {product.name} </li>,                            
                                <li> Description: {product.description} </li>,
                                <li> Price: {"U$S"} {`${product.price}`}  </li>, 
                                <li> Audio: {product.audio} </li>                                                
                            </ul>   
                          </div> 
                          <div className="ImageAlbum">
                              <img  src={`http://localhost:3001/images/${product.image}`} alt='album2' />
                          </div> 
                        </div>    
                        )                    
                    })}
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
    SEARCH_EFFECT: (name) => {dispatch(searchProducts(name))}
    };
  }


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Results);