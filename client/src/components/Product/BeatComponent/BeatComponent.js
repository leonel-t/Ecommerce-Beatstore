import 'js-snackbar/snackbar.css';
import './beatComponent.css';
import React from 'react';
import Spectrum from '../Spectrum/Spectrum';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../stores/user/user.actions';
import { show } from 'js-snackbar';
const BeatComponent = ({ addItemToCartEffect, product }) => {

    const handleAddToCart = (product)=>{
        show({ text: 'PRODUCT ADDED!', pos:'bottom-center', duration: 5000, });
        return addItemToCartEffect("user", product)
    }
    return (
        <div className="beatComponent--main">
            {product && product.name
                ?(
                    <div className="beatComponent--main-row">
                    <div className="beatComponent--main-imagen-col">
                        <img alt="album" src={`http://localhost:3001/images/${product.image}`}></img>
                    </div>
                    <div className="beatComponent--main-beatInfo-col">
                        <span className="material-icons icon-size"> play_circle_outline </span>
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
                                        <span className="material-icons">add_shopping_cart</span>
                                    </div>
                                     <div>
                                        Buy $ {product.price} 
                                     </div>
                                </div>
                            </button>
                        </div>
                        <div className="beatComponent--main-beatActions-col">
                            <p>{product.description}</p>
                        </div>
                        <Spectrum></Spectrum>
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
}

const mapStateToProps =  state => {
    return {
      STORE_PRODUCT : state.productsReducers
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
      addItemToCartEffect: (user, product) => dispatch(addItemToCart(user, product))  
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(BeatComponent);

