import "./ItemCard.css"
import React, {useEffect} from "react"
import { connect } from 'react-redux';
import { fetchCart, deleteItemInCart } from '../../../stores/user/user.actions';
import swal from "sweetalert"

const ItemCard = ({fetchCartEffect, deleteItemInCartEffect, STORE_PRODUCT, id, img, name, autor, price }) => {

  var user = false;

    useEffect(()=>{
        fetchCartEffect(user)
      },[fetchCartEffect, user]);    

    const handleDelete= (id, state) => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Item delete Sussecce!", {
                icon: "success",
              });
              return deleteItemInCartEffect(id, state);
            } else {
              swal("Your imaginary file is safe!");
            }
          });

    }
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