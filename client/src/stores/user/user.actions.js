import axios from 'axios';
//FETCH USER FROM THE SERVER WITCH THUNK
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
//FETCH CART FROM THE SERVER WITCH THUNK
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CAR_FAILURE = "GET_CAR_FAILURE";
//ADD ITEM TO CART
export const ADD_ITEM_TO_CARD_REQUEST = "ADD_ITEM_TO_CARD_REQUEST";
export const ADD_ITEM_TO_CARD_SUCCESS = "ADD_ITEM_TO_CARD_SUCCESS";
export const ADD_ITEM_TO_CARD_FAILURE = "ADD_ITEM_TO_CARD_FAILURE";
//DELETE ITEM IN CART
export const DELETE_ITEM_CART_REQUEST = "DELETE_ITEM_CART_REQUEST";
export const DELETE_ITEM_CART_SUCCESS = "DELETE_ITEM_CART_SUCCESS";
export const DELETE_ITEM_CART_FAILURE = "DELETE_ITEM_CART_FAILURE";
export const GET_CALCULATOR_TOTAL_PRICE = "GET_CALCULATOR_TOTAL_PRICE";
//COUPON
export const GET_DISCOUNT_COUPON = "GET_DISCOUNT_COUPON";

//GET USER
export const fetchUser = () => {

    return (dispatch) =>{

        dispatch(getUserRequest())
        const options = {
            method: 'GET',
            url: 'http://localhost:3001/profile',
            params: {
                secret_token: localStorage.getItem('token'),
                email: localStorage.getItem('email')
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          };
        axios.request(options)
            .then(user => {
                
                setTimeout(()=>{
                    dispatch(getUserSuccess(user))
                    dispatch(fetchCart({userState:true, id:user.data.user.id}))
                },100)
                
            })
            .catch(error => {
                dispatch(getUserFailure(error))
                dispatch(fetchCart({userState:false}))
            })
    }
}

export const getUserRequest = () =>{
    return {
        type: GET_USER_REQUEST,
    }
} 
export const getUserSuccess = (user) =>{
    return {
        type:GET_USER_SUCCESS,
        payload: user
    }
} 
export const getUserFailure = (error) =>{
    return {
        type:GET_USER_FAILURE,
        payload: error
    }
} 

//GET CALCULATOR TOTAL PRICE
export const getCalculator = () =>{
    return {
        type:GET_CALCULATOR_TOTAL_PRICE,
    }
} 

//GET CART
export const fetchCart = (user) => {

    return (dispatch) =>{

    if(user.userState){
            dispatch(getCartRequest())
            axios.get(`http://localhost:3001/order/user/${user.id}`)
                .then(cart => {
                    dispatch(getCartSuccess(user, cart.data[0]))
                })
                .catch(error => {
                    dispatch(getCartFailure(error))
                })
        
        }else{

            dispatch(getCartSuccess(user, [{test:"Test"}]))
        }
    }
    
    /*
    else{
        return (dispatch)=>{
            let testCart =[
                {
                    id: 7,
                    orderStatus: "cart",
                    total: "0",
                    userId: 36580834,
                    orderLines: ["test Cart Local Store"]
                  }
            ]
            dispatch(getCartSuccess(user, testCart));
            dispatch(getCalculator());
            
        }
    }
    */
}

export const getCartRequest = () =>{
    return {
        type: GET_CART_REQUEST,
    }
} 
export const getCartSuccess = (user, cart) =>{
    let obj ={
        user, 
        cart
    }
    return {
        type:GET_CART_SUCCESS,
        payload: obj
    }
} 
export const getCartFailure = (error) =>{
    return {
        type:GET_CAR_FAILURE,
        payload: error
    }
} 

//ADD ITEM TO CART
export const addItemToCart = (user, product) => {
    return (dispatch) =>{
    if(user.userStatus){

        let previusProduct= {
            productId:product.id,
            price:product.price,
            subtotal:0,
            orderId:user.orderId
        }
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/orderline/',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                productId: previusProduct.productId,
                price: previusProduct.price,
                subtotal: 0, 
                orderId: previusProduct.orderId
            }
          };
          
        return axios.request(options).then(function (orderLine) {
            dispatch(addItemToCartSuccess(orderLine.data))
          }).catch(function (error) {
            dispatch(getCartFailure(error))
          });

        }else{
            console.log("USER ANONIMO")
        }
    }
}

export const addItemToCartRequest = () =>{
    return {
        type: ADD_ITEM_TO_CARD_REQUEST,
    }
} 
export const addItemToCartSuccess = (product) =>{
    return {
        type:ADD_ITEM_TO_CARD_SUCCESS,
        payload: product
    }
} 
export const addItemToCartFailure = (error) =>{
    return {
        type:ADD_ITEM_TO_CARD_FAILURE,
        payload: error
    }
} 

//COUPON CODE
export const getDiscountCoupon = (code) => {
    var user = {
        state:true,
        id:36580834
      };
    return (dispatch)=>{
        dispatch(getDiscountCouponAction(code));
        dispatch(fetchCart(user));
    }
}
export const getDiscountCouponAction = (code) =>{
    return {
        type: GET_DISCOUNT_COUPON,
        payload: code
    }
} 

//DELETE ITEM CART
export const deleteItemInCart = (orderLineId, user) => {

    console.log("USER DELETE PRODUCT",user)
    return async (dispatch)=>{

        if(user.userState){

            console.log("ORDER LINE ID", orderLineId)
            const options = {
                method: 'DELETE',
                url: `http://localhost:3001/orderline/${orderLineId}`,
              };
         return await axios.request(options).then(response => {
                    console.log("RESPONSE DELETE",response)
                    dispatch(fetchCart(user));
                }).catch(error => {
                    console.log("RESPONSE DELETE",error)
                    dispatch(getCartFailure(error))
                })          
        }else{

        }
      
    }
}

export const deleteItemCartRequest = () =>{
    return {
        type: DELETE_ITEM_CART_REQUEST,
    }
} 
export const deleteItemCartSuccess = (productId, deleteAll) =>{
    let obj = {
        productId,
        deleteAll
    }
    return {
        type:DELETE_ITEM_CART_SUCCESS,
        payload: obj
    }
} 
export const deleteItemCartFailure = (error) =>{
    return {
        type:DELETE_ITEM_CART_FAILURE,
        payload: error
    }
} 

//DELETE ALL ITEM CART
export const deleteAllItemInCart = (user,orderId) => {

    return async (dispatch)=>{

        if(user.userState){
            const options = {
                method: 'DELETE',
                url: `http://localhost:3001/orderline/all/${orderId}`,
              };
         return await axios.request(options).then(() => {
                    dispatch(fetchCart(user));
                }).catch(error => {
                    dispatch(getCartFailure(error))
                })          
        }else{
            //ANONIMO
            console.log("ANONIMO NO DELETE")
        }
      
    }
}
