import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchOneProduct } from '../stores/products/products.actions';
//components
import BeatComponent from '../components/Product/BeatComponent/BeatComponent';
import BeatCommentsInputComponent from '../components/Product/BeatCommentsInputComponent/BeatCommentsInputComponent';
import TabPanel from '../components/Product/TabPanel/TabPanel';
import "./product.css"

const Product = ({fetchOneProductEffect, STORE_PRODUCT}) =>{

  const { productId } = useParams();
    useEffect(()=>{
        fetchOneProductEffect(productId)
      },[fetchOneProductEffect, productId]);
      
    return (
        <>
          {STORE_PRODUCT.productLoading
            ?(
              <p>Cargando</p>
            )
            :(
              <main className="product--main">
                <BeatComponent product={STORE_PRODUCT.product}/>
               
                <BeatCommentsInputComponent/>
                
                <TabPanel/>
              </main>
             
            )
          }
        </>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCT : state.productsReducers
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      fetchOneProductEffect: (productId) => dispatch(fetchOneProduct(productId)) 
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);
