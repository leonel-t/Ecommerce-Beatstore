import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchOneProduct, postComment, getProductsByCategories } from '../../stores/products/products.actions';
import { fetchUser } from '../../stores/user/user.actions';
//components
import BeatComponent from '../../components/Product/BeatComponent/BeatComponent';
import BeatCommentsInputComponent from '../../components/Product/BeatCommentsInputComponent/BeatCommentsInputComponent';
import TabPanel from '../../components/Product/TabPanel/TabPanel';
import PreLoad from "./PreLoad"
import "./product.css";

const Product = ({ relatedArtist, ProductsByCategories, postCommentEffect, fetchUserEffect, STORE_PRODUCT }) => {


  window.scrollTo({
    top: 0,
    left: 0,
    behavir: 'smooth'
  });

  const { productId } = useParams();
  useEffect(() => {
    fetchUserEffect()

    let categories = STORE_PRODUCT.product.categories?.map(c => c.name)
    console.log(categories)
    ProductsByCategories(categories)

  }, [fetchUserEffect, productId, ProductsByCategories, STORE_PRODUCT.product]);

  return (
    <>
      {STORE_PRODUCT.productLoading
        ? (
          <p>Cargando</p>
        )
        : (
          <main className="product--main">
            <PreLoad />
            <BeatComponent product={STORE_PRODUCT.product} />

            <BeatCommentsInputComponent action={postCommentEffect} product={STORE_PRODUCT.product.id} />

            <TabPanel related={relatedArtist} product={STORE_PRODUCT.product} />
            <div className="divider"></div>
          </main>

        )
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    STORE_PRODUCT: state.productsReducers,
    relatedArtist: state.productsReducers.productCategories

  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchOneProductEffect: (productId) => dispatch(fetchOneProduct(productId)),
    postCommentEffect: (productId, comment) => dispatch(postComment(productId, comment)),
    fetchUserEffect: () => dispatch(fetchUser()),
    ProductsByCategories: (categories) => dispatch(getProductsByCategories(categories)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
