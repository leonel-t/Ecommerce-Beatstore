import "./ItemCard.css"
import React from "react"
import { connect } from 'react-redux';
import { deleteItemInCart } from '../../../stores/user/user.actions';

const ItemCard = ({ deleteItemInCartEffect, STORE_PRODUCT, id, img, name, autor, price }) => {
    return (
        <div className="--ItemCard">
            <div className="--ItemCard-left">
                <img alt="albumImg" src={`http://localhost:3001/images/${img}`} />
                <div className="--ItemCard-data">
                    <h2>{name}</h2>
                    <p>{autor}</p>
                </div>
            </div>
            <div
             className="--ItemCard-right">
                <span>${price}</span>
                <span 
                onClick={()=>deleteItemInCartEffect(id, false)}
                class="material-icons">delete</span>
            </div>
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
        deleteItemInCartEffect: (productId, deleteAll) => dispatch(deleteItemInCart(productId, deleteAll))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);