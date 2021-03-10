import '../assets/css/catalog.css'
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../stores/products/products.actions';

const Catalog = ({fetchAllProductsEffect, STORE_PRODUCTS}) =>{

    useEffect(()=>{
        fetchAllProductsEffect()
      },[fetchAllProductsEffect]);

    return (
        <main className="catalog--main">
          <h1>Catalog</h1>
        </main>
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
