import "./Cart.css"
import React, {useEffect} from "react"
import ItemCard from "../../components/Cart/ItemCard/ItemCard"
import SummaryCard from "../../components/Cart/SummaryCard/SummaryCard";
import { connect } from 'react-redux';
import { fetchCart, deleteItemInCart, getDiscountCoupon } from '../../stores/user/user.actions';
import swal from 'sweetalert'
const Cart = ({fetchCartEffect, deleteItemInCartEffect, getDiscountCouponEffect ,STORE_CART, TOTAL_PRICE, SUBTOTAL_PRICE, DISCOUNT_PRICE}) => {
    var user = false;

    useEffect(()=>{
        fetchCartEffect(user)
      },[fetchCartEffect, user]);    
    
      const handleDelete= (id, state) => {
        
        swal({
            title: "Are you sure?",
            text: "you are about to empty the cart!",
            icon: "warning",
            buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("the cart has been emptied!", {
                icon: "success",
                timer: 2000
              });
                      
              return deleteItemInCartEffect(id, state)
            } else {
              swal("your cart is safe!",{
                timer: 2000
              });
            }
          });

    }
    return (
        <div className="--Cart">
            <div className="--Cart-items">
              <h1>Cart Review</h1>
                {STORE_CART && STORE_CART.length > 0
                    ?(

                      <>
                        <div>
                        {
                         STORE_CART.map((product, index)=>
                            <ItemCard key={index} id={product.id} img={product.image} name={product.name} autor={product.artist} price={product.price}/>
                        )
                        }
                        </div>
                        <div>
                            <button className="--Cart-deleteCart"
                            onClick={()=>handleDelete(null, true)}
                            >Empty Cart</button>
                        </div>
                      </>
                    ):
                    (
                        <p className="empty-cart">You don't have items in cart</p>
                    )
                }
            </div>
            <SummaryCard funtionD={getDiscountCouponEffect} subtotal={SUBTOTAL_PRICE} total={TOTAL_PRICE} discount={DISCOUNT_PRICE}/>
        </div>
    )
}

const mapStateToProps =  state => {
    return {
      STORE_CART : state.userReducers.cart,
      TOTAL_PRICE : state.userReducers.totalPrice,
      SUBTOTAL_PRICE : state.userReducers.subtotalPrice,
      DISCOUNT_PRICE : state.userReducers.coupon
    }
  }
  const mapDispatchToProps = dispatch =>{
    return {
        fetchCartEffect: (user) => dispatch(fetchCart(user)),
        deleteItemInCartEffect: (productId, deleteAll) => dispatch(deleteItemInCart(productId, deleteAll)),
        getDiscountCouponEffect: (code) => dispatch(getDiscountCoupon(code)),
    }
  }
  
  
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
