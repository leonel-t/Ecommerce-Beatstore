import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../../stores/products/products.actions';
import MiddleSearchBar from './MiddleSearchBar/MiddleSearchBar.js';
import Container from "./Lists/Container"

const Home = ({fetchAllProductsEffect, STORE_PRODUCTS}) =>{

    useEffect(()=>{
        fetchAllProductsEffect()
      },[fetchAllProductsEffect]);

    return (
        <div>
            <MiddleSearchBar/>
            <Container/>
        </div>
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
