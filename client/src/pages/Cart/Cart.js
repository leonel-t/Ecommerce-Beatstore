import "./Cart.css"
import React, {useEffect} from "react"
import ItemCard from "../../components/Cart/ItemCard/ItemCard"
import SummaryCard from "../../components/Cart/SummaryCard/SummaryCard";
import { connect } from 'react-redux';
import { fetchCart, deleteItemInCart } from '../../stores/user/user.actions';
const Cart = ({fetchCartEffect, deleteItemInCartEffect ,STORE_CART}) => {
    var user = false;

    useEffect(()=>{
        
        fetchCartEffect(user)
      },[fetchCartEffect, user]);    
    
    return (
        <div className="--Cart">
            <div className="--Cart-items">
                {STORE_CART && STORE_CART.length > 0
                    ?(

                      <>
                        <div>
                        {
                         STORE_CART.map((product, index)=>
                            <ItemCard key={index} id={product.id} img={product.image} name={product.name} autor={product.autor} price={product.price}/>
                        )
                        }
                        </div>
                        <div>
                            <button
                            onClick={()=>deleteItemInCartEffect(null, true)}
                            >Empy Cart</button>
                        </div>
                      </>
                    ):
                    (
                        <p className="empy-cart">Empy Cart</p>
                    )
                }
            </div>
            <SummaryCard subtotal="1210" total="1100" discount="110"/>
        </div>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_CART : state.userReducers.cart
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
        fetchCartEffect: (user) => dispatch(fetchCart(user)),
        deleteItemInCartEffect: (productId, deleteAll) => dispatch(deleteItemInCart(productId, deleteAll))
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
