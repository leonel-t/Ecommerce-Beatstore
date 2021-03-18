import axios from 'axios';
//FETCH USER FROM THE SERVER WITCH THUNK
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
//FETCH CART FROM THE SERVER WITCH THUNK
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CAR_FAILURE = "GET_CAR_FAILURE";

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
                },2000)
                
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

//GET CART
export const fetchCart = () => {

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
}

export const getCartRequest = () =>{
    return {
        type: GET_CART_REQUEST,
    }
} 
export const getCartSuccess = (cart) =>{
    return {
        type:GET_CART_SUCCESS,
        payload: cart
    }
} 
export const getCartFailure = (error) =>{
    return {
        type:GET_CAR_FAILURE,
        payload: error
    }
} 

