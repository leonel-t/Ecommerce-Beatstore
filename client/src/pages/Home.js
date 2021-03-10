import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../stores/products/products.actions';

const Home = ({fetchAllProductsEffect, STORE_PRODUCTS}) =>{

    useEffect(()=>{
        fetchAllProductsEffect()
      },[fetchAllProductsEffect]);

    return (
        <h1>Home</h1>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      fetchAllProductsEffect: () => dispatch(fetchAllProducts())
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
