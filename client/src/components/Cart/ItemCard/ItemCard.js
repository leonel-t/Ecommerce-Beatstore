import "./ItemCard.css"
import React, {useEffect} from "react"
import { connect } from 'react-redux';
import {Link} from "react-router-dom"
import { fetchCart, deleteItemInCart } from '../../../stores/user/user.actions';
import swal from "sweetalert"
import sound from "../../../assets/audio/trash-click.mp3"

const ItemCard = ({fetchCartEffect, deleteItemInCartEffect, STORE_PRODUCT, id, img, name, autor, price }) => {
  const audio = new Audio(sound);
        audio.volume=1;
  var user = false;

    useEffect(()=>{
        fetchCartEffect(user)
      },[fetchCartEffect, user]);    

    const handleDelete= (id, state) => {
        swal({
            title: "Are you sure?",
            text: "you are about to remove the product from the cart!",
            icon: "warning",
            buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("the product has been removed from the cart!", {
                icon: "success",
                timer: 2000
              });
              audio.play();
              return deleteItemInCartEffect(id, state);
            } else {
              swal("the product has not been removed!",{
                timer: 2000
              });
            }
          });

    }
    return (
        <div className="--ItemCard">
            <div className="--ItemCard-left">
                <img alt="albumImg" src={`http://localhost:3001/images/${img}`} />
                <div className="--ItemCard-data">
                    <Link to={`/product/${id}`}><h2>{name}</h2></Link>
                    
                    <p>{autor}</p>
                </div>
            </div>
            <div
             className="--ItemCard-right">
                <span>${price}</span>
                <span 
                onClick={()=>handleDelete(id, false)}
                className="material-icons --ItemCard-deletItem">delete</span>
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
        fetchCartEffect: (user) => dispatch(fetchCart(user)),
        deleteItemInCartEffect: (productId, deleteAll) => dispatch(deleteItemInCart(productId, deleteAll))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);