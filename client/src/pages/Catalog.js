import './Catalog.css'
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../stores/products/products.actions';
import CatalogCard from '../components/Product/Catalog/CatalogCard';

const Catalog = ({fetchAllProductsEffect, STORE_PRODUCTS}) =>{

    const song=[{
      name:"The Rules",
      autor:"Stuck in the Sound"
    }]

    useEffect(()=>{
        fetchAllProductsEffect()
      },[fetchAllProductsEffect]);

    return (
        <main className="catalog--main">
          <CatalogCard name={song[0].name} autor={song[0].autor}/>
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
