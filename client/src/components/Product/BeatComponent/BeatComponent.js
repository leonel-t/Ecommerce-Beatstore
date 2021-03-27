import React, {useState, useEffect} from 'react';
import Spectrum from '../Spectrum/Spectrum';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../stores/user/user.actions';
import { fetchAddLikeToProduct } from '../../../stores/products/products.actions';
import { show } from 'js-snackbar';

import axios from 'axios';

import 'js-snackbar/snackbar.css';
import './beatComponent.css';
import productsReducers from '../../../stores/products/products.reducers';

const BeatComponent = ({ addItemToCartEffect,fetchAddLikeToProductEffect, product }) => {



    const handleAddToCart = (product)=>{

        show({ text: 'PRODUCT ADDED!', pos:'bottom-center', duration: 5000, });
        return addItemToCartEffect("user", product)
    }

    const [likeState, setLikeState] = useState(false);


    const handleLike = async (e,id,likes) => {
        e.preventDefault();
        setLikeState(true)
        return fetchAddLikeToProductEffect(id, likes);
        
    };


    return (
        <div className="beatComponent--main">
            {product && product.name
                ?(
                    <div className="beatComponent--main-row">
                    <div className="beatComponent--main-imagen-col">
                        <img alt="album" src={`http://localhost:3001/images/${product.image}`}></img>
                    </div>
                    <div className="beatComponent--main-beatInfo-col">
                        
                        <h1>{product.name} </h1><p>{product.artist}</p>
                        <div className="beatComponent--main-beatInfo-col-author">
                            
                        </div>
                        <div className="beatComponent--main-beatActions-col">
                            <div className="beatComponent--main-beatActions-col-div">
                                <span className="material-icons icons"> play_arrow </span>
                                {product.reproductions}
                            </div>
                            <div className="beatComponent--main-beatActions-col-div">
                                <span className="icon-bpm icons">BPM</span>
                                {product.bpm}
                            </div>
                            <div className="beatComponent--main-beatActions-col-div">
                                <span className="material-icons icons">music_note</span>
                                {product.scale}
                            </div>
                            <div className="beatComponent--main-beatActions-col-div">
                                <span className="material-icons icons">event</span>
                                {product.date}
                            </div>
                        </div>
                        <div className="beatComponent--main-beatActions-col">
                            <button className="beatComponent--main-beatActions-col-btn">
                                <div 
                                onClick={()=> {return handleAddToCart(product)}}
                                className="beatComponent--main-beatActions-col-btn-row">
                                    <div>
                                        <span className="material-icons cart-icons">add_shopping_cart</span>
                                    </div>
                                     <div className="button-cart2">
                                        Add to cart <br/> $ {product.price} 
                                     </div>
                                     
                                </div>
                            </button>
                            <>
                            {likeState ?(
                                <div className="product-likes2">
                                 <span className="product-likes"> {product.likes} </span>
                                 <p>¡Thanks for your like!</p>  
                                </div>  
                            ):(
                                 <div className="product-likes2">
                                    <span className="product-likes"> {product.likes} </span>
                                    <span class="material-icons finger-up" onClick={(e)=>handleLike(e,product.id)} >thumb_up_off_alt</span>
                                </div>
                            )}
                            </>
                        </div>
                        <div className="beatComponent--main-beatActions-col column">
                            {product.categories && product.categories.length > 0
                                ?(
                                    product.categories.map((categorie)=>{
                                        return (
                                            <span className="beatComponent--main-beatActions-col-cat">{categorie.name}</span>
                                        )
                                    })
                                ):(
                                    <></>
                                )
                            }
                        </div>
                        <div className="beatComponent--main-beatActions-col column">
                            <p>{product.description}</p> 
                        </div>
                        <div className="spec">
                            <span className="material-icons icon-size"> play_circle_outline </span>
                           
                            <Spectrum></Spectrum>
                        </div>
                    </div>
    
    
                    <div className="beatComponent--main-beatTags-col">
                            
                    </div>
                </div>
                )
                :(
                    <p>No se encuentra el producto</p>
                )
            }
        </div>

    )
};

const mapStateToProps =  state => {
    return {
      STORE_PRODUCT : state.productsReducers
    }
  }

const mapDispatchToProps = dispatch =>{
    return {
      addItemToCartEffect: (user, product) => dispatch(addItemToCart(user, product)),
      fetchAddLikeToProductEffect: (productId, likeNumber) => dispatch(fetchAddLikeToProduct(productId, likeNumber))  
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(BeatComponent);

