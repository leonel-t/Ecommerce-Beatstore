
import React, { useEffect, useLayoutEffect } from 'react';
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"
import ResultCard from '../../../components/ResultCard/ResultCard';

import {searchProducts} from "../../../stores/products/products.actions"
import "./Results.css"

const Results = ({STORE_PRODUCTS, SEARCH_EFFECT}) => {

    const {name} = useParams();

        useEffect(()=>{
            SEARCH_EFFECT(name)
        },[SEARCH_EFFECT,name])



    return (
        <div className="--Results">
            {STORE_PRODUCTS.productsReducers.searchResults && STORE_PRODUCTS.productsReducers.searchResults.length > 0 ? (
                <>
                    <h1>Search results:</h1>
                    <div className="--Results-items">
                        {
                            STORE_PRODUCTS.productsReducers.searchResults.map((product,id)=>
                                <ResultCard product={product} key={id}/>
                            )
                        }
                    </div>
                </>
            ) : (
                <>
                    <h1>We have not found products that match your search.</h1>
                </>
            )}
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