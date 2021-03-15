
import React, {useEffect} from 'react';
import {connect} from "react-redux"
import "./Results.css"
// import {searchProductSuccess} from "../../../stores/products/products.actions"

const Results = ({STORE_PRODUCTS}) => {



        

    return (
        <div className='Muestra'>
            <h1>HISTORY</h1>
                {STORE_PRODUCTS.productsReducers.searchResults.map((product,id)=>{
                    console.log(product.name) 
                    return (
                          <div className="encontrado">
                            <ul>    
                                <li> Name: {product.name} </li>,                            
                                <li> Description: {product.description} </li>,
                                <li> Price: {product.price} </li>,   
                                <li> Image: {product.image} </li>,
                                <li> Audio: {product.audio} </li>                 
                            </ul>
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
//   const mapDispatchToProps = dispatch =>{
//     return {
//       fetchAllProductsEffect: (product) => dispatch(searchProductSuccess(product)) 
//     }
//   }

export default connect(
    mapStateToProps,
    // mapDispatchToProps
  )(Results);