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
                },100)
                
            })
            .catch(error => {
                dispatch(getUserFailure(error))
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
    if(user){
        return (dispatch) =>{
            dispatch(getCartRequest())
            axios.get("https://jsonplaceholder.typicode.com/photos")
                .then(cart => {
                    dispatch(getCartSuccess(cart))
                })
                .catch(error => {
                    dispatch(getCartFailure(error))
                })
        }
    }else{
        return (dispatch)=>{
            dispatch(getCartSuccess(user, false));
            dispatch(getCalculator());
            
        }
    }
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
    
    if(!user){
        return (dispatch) =>{
/*
            dispatch(addItemToCartRequest())
            axios.post("https://jsonplaceholder.typicode.com/photos")
                .then(cart => {
                    dispatch(addItemToCartSuccess(cart))
                })
                .catch(error => {
                    dispatch(addItemToCartFailure(error))
                })
*/
        }
    }else{
        return (dispatch)=>{
            return dispatch(addItemToCartSuccess(product))
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
    return (dispatch)=>{
        dispatch(getDiscountCouponAction(code));
        dispatch(fetchCart());
    }
}
export const getDiscountCouponAction = (code) =>{
    return {
        type: GET_DISCOUNT_COUPON,
        payload: code
    }
} 

//DELETE ITEM CART
export const deleteItemInCart = (productId, deleteAll) => {
    return (dispatch)=>{
        dispatch(deleteItemCartSuccess(productId, deleteAll));
        dispatch(fetchCart());
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
