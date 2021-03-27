import React from "react"
import { Link } from "react-router-dom";
import "./ResultCard.css"

import { connect } from "react-redux";
import { addItemToCart } from "../../stores/user/user.actions";
import { show } from 'js-snackbar';

const ResultCard = ({ product , addItemToCartEffect }) => {
    const handleAddToCart = (product)=>{
        show({ text: 'PRODUCT ADDED!', pos:'bottom-center', duration: 5000, });
        return addItemToCartEffect("user", product)
    }
    return (
        <div className="--ResultCard">
            <div className="--ResultCard-content">
                <div className="--ResultCard-img">
                    <img src={`http://localhost:3001/images/${product.image}`} alt='productImage' />
                </div>
                <div className="--ResultCard-info">
                    <div className="--ResultCard-info-name">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </div>
                    <div className="--ResultCard-info-artist">
                        <span>{product.artist}</span>
                    </div>
                    <div className="--ResultCard-info-categories">
                        {
                            product.categories.map((category) =>
                                <span>{category.name}</span>)
                        }
                    </div>
                </div>
            </div>
            <div className="--ResultCard-pricing">
                <div className="--ResultCard-pricing-price">
                    <span>$ {product.price}</span>
                </div>
                <div className="--ResultCard-pricing-addCart">
                    <span onClick={()=> {return handleAddToCart(product)}} class="material-icons --ResultCard-cartIcon">add_shopping_cart</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultCard);