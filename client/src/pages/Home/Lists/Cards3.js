
import React, {useEffect} from 'react';
import Card from './Card';
import "./Cards.css"
import { connect } from "react-redux";
import { fetchAllProducts } from "../../../stores/products/products.actions";

const CardsTres = ({ fetchAllProductsEffect, STORE_PRODUCTS }) => {
  const allProducts = STORE_PRODUCTS.products;

  useEffect(() => {
    fetchAllProductsEffect();
  }, [fetchAllProductsEffect]);

    return (
        <div id="ListA">
            {allProducts && allProducts.length > 1
            ?(
                allProducts.slice(5,10).map((product, index)=>{
                    return (
                        <Card key={index} name={product.name} image={product.image} artist={product.artist} date={product.date}/> 
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CardsTres);