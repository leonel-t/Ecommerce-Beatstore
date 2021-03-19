import React from "react";
import "./CatalogCard.css";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { addItemToCart } from "../../../stores/user/user.actions";
import { show, ACTION_TYPE } from 'js-snackbar';

const CatalogCard = ({addItemToCartEffect,STORE_PRODUCTS, id, name, autor, image, price, product}) => {
    const handleAddToCart = (product)=>{
        show({ text: 'PRODUCT ADDED!', pos:'bottom-center', duration: 5000, });
        return addItemToCartEffect("user", product)
    }
    return (
        <div className="--CatalogCard">
            <div className="--CatalogCard-image">
                <img alt="albumimage" src={`http://localhost:3001/images/${image}`}/>
            </div>
            <div className="--CatalogCard-details">
                <div className="--CatalogCard-info">
                    <p className="--CatalogCard-info-song">
                        <Link className="--CatalogCard-link" to={`/product/${id}`}>
                            {name.length > 20
                                ?(
                                    name.slice(0,20) + "..."
                                ):(
                                    name
                                )
                            }
                        </Link></p>
                    <p className="--CatalogCard-info-autor">{autor}</p>
                </div>
                <div className="--CatalogCard-details-price">
                    <p>$ {price}</p>
                    <span onClick={()=> {return handleAddToCart(product)} } className="material-icons --CatalogCard-details-shopIcon">add_shopping_cart</span>
                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      STORE_PRODUCTS: state.productsReducers,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCartEffect: (user, product) => dispatch(addItemToCart(user, product)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CatalogCard);
