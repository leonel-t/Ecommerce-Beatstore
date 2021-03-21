
import React, {useEffect} from 'react';
import Card from './Card';
import "./Cards.css"
import { connect } from "react-redux";
import { fetchAllProducts } from "../../../stores/products/products.actions";

const Cards = ({ fetchAllProductsEffect, STORE_PRODUCTS }) => {
  const allProducts = STORE_PRODUCTS.products;

  useEffect(() => {
    fetchAllProductsEffect();
  }, [fetchAllProductsEffect]);

    return (
        <div id="ListA">
            {allProducts && allProducts.length > 1
            ?(
                allProducts.slice(0,5).map((product, index)=>{
                    return (
                        <Card key={index} id={product.id} name={product.name} image={product.image} artist={product.artist} date={product.date}/> 
                    )
                })
            ):(
                <p>No Products</p>
            )

            }
             
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      STORE_PRODUCTS: state.productsReducers,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchAllProductsEffect: () => dispatch(fetchAllProducts()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Cards);