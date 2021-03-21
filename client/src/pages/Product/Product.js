import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchOneProduct, postComment } from '../../stores/products/products.actions';
import {fetchUser} from '../../stores/user/user.actions';

//components
import BeatComponent from '../../components/Product/BeatComponent/BeatComponent';
import BeatCommentsInputComponent from '../../components/Product/BeatCommentsInputComponent/BeatCommentsInputComponent';
import TabPanel from '../../components/Product/TabPanel/TabPanel';
import "./product.css";

const Product = ({fetchOneProductEffect, postCommentEffect, fetchUserEffect,  STORE_PRODUCT}) =>{

  const { productId } = useParams();
    useEffect(()=>{
        fetchUserEffect()
        fetchOneProductEffect(productId)
      },[fetchUserEffect, fetchOneProductEffect, productId]);
      
    return (
        <>
          {STORE_PRODUCT.productLoading
            ?(
              <p>Cargando</p>
            )
            :(
              <main className="product--main">
                <BeatComponent product={STORE_PRODUCT.product}/>
               
                <BeatCommentsInputComponent action={postCommentEffect} product={STORE_PRODUCT.product.id}/>
                
                <TabPanel  product={STORE_PRODUCT.product}/>
              </main>
             
            )
          }
        </>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCT : state.productsReducers,
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      fetchOneProductEffect: (productId) => dispatch(fetchOneProduct(productId)),
      postCommentEffect: (productId, comment) => dispatch(postComment(productId, comment)),
      fetchUserEffect: () => dispatch(fetchUser())
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Product);
