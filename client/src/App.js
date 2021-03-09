import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import { fetchAllProducts } from './stores/products/products.actions';

const App = ({fetchAllProductsEffect, STORE_PRODUCTS}) => {
  console.log(STORE_PRODUCTS)

  useEffect(()=>{
    fetchAllProductsEffect()
  },[fetchAllProductsEffect])

  return (
    <div className="App">
      {STORE_PRODUCTS.productsReducers.productsLoading
        ?(
          <p>Cargando</p>
        )
        :(
          <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        )
      }
    </div>
  );
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
