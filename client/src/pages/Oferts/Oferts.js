import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import { fetchOneProduct } from '../../stores/products/products.actions';

import "./oferts.scss";

const Oferts = ({ STORE_PRODUCT }) => {


  window.scrollTo({
    top: 0,
    left: 0,
    behavir: 'smooth'
  });

  useEffect(() => {


  }, []);

  return (
    <>
      {true
        ? (
          <p>Cargando</p>
        )
        : (
          <main className="product--main">
              <h1>Oferts</h1>
          </main>

        )
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    STORE_PRODUCT: state.productsReducers,
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchOneProductEffect: (productId) => dispatch(fetchOneProduct(productId)),
//   }
// }


export default connect(mapStateToProps)(Oferts);