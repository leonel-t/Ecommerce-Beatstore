import "./Cart.css"
import React, {useEffect} from "react"
import ItemCard from "../../components/Cart/ItemCard/ItemCard"
import SummaryCard from "../../components/Cart/SummaryCard/SummaryCard";
import { connect } from 'react-redux';
import { fetchCart, deleteItemInCart, getDiscountCoupon } from '../../stores/user/user.actions';
import swal from 'sweetalert';
//Internationalization
import { withTranslation } from 'react-i18next';

const Cart = ({t,fetchCartEffect, deleteItemInCartEffect, getDiscountCouponEffect ,STORE_CART, TOTAL_PRICE, SUBTOTAL_PRICE, DISCOUNT_PRICE}) => {
    var user = false;

    useEffect(()=>{
        fetchCartEffect(user)
      },[fetchCartEffect, user]);    
    
      const handleDelete= (id, state) => {
        
        swal({
            title: t("page.cart.alerts.emptyCart.title"),
            text: t("page.cart.alerts.emptyCart.text"),
            icon: "warning",
            buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal(t("page.cart.alerts.emptyCart.cartEmpty"), {
                icon: "success",
                timer: 2000
              });
                      
              return deleteItemInCartEffect(id, state)
            } else {
              swal(t("page.cart.alerts.emptyCart.cartSafe"),{
                timer: 2000
              });
            }
          });

    }
    return (
        <div className="--Cart">
            <div className="--Cart-items">
              <h1>{t("page.cart.title")}</h1>
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
                            >
                              {t("page.cart.alerts.emptyCart.btn")}
                            </button>
                        </div>
                      </>
                    ):
                    (
                        <p className="empty-cart">{t("page.cart.alerts.emptyCart.noItems")}</p>
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
  
  
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Cart));
