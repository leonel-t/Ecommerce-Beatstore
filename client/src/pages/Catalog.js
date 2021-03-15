import './Catalog.css'
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../stores/products/products.actions';
import CatalogCard from '../components/Product/Catalog/CatalogCard';

const Catalog = ({fetchAllProductsEffect, STORE_PRODUCTS}) =>{

    const allProducts = STORE_PRODUCTS.products;


    useEffect(()=>{
        fetchAllProductsEffect()
      },[fetchAllProductsEffect]);

    return (
        <main className="catalog--main">
          {allProducts && allProducts.length >= 1
            ?(
              allProducts.map((product, index) =>{
                return (
                  <CatalogCard key={index} id={product.id} name={product.name} autor={product.artist} image={product.image}/>
                )
              })
              
            )
            :(
              <p>NO PRODUCTS IN DB</p>
            )
          }
          
        </main>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCTS : state.productsReducers
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      fetchAllProductsEffect: () => dispatch(fetchAllProducts()) 
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
