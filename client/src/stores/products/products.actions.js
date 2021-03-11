import axios from 'axios';
//FETCH ALL PRODUCTS FROM THE SERVER WITCH THUNK
export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAILURE = "GET_ALL_PRODUCTS_FAILURE";

//FETCH ONE PRODUCT FROM THE SERVER WITCH THUNK
export const GET_ONE_PRODUCT_REQUEST = "GET_ONE_PRODUCT_REQUEST";
export const GET_ONE_PRODUCT_SUCCESS = "GET_ONE_PRODUCT_SUCCESS";
export const GET_ONE_PRODUCT_FAILURE = "GET_ONE_PRODUCT_FAILURE";


export const fetchAllProducts = () => {

    return (dispatch) =>{
        dispatch(getAllProductsRequest())
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(products => {
                dispatch(getAllProductsSuccess(products))
            })
            .catch(error => {
                dispatch(getAllProductsFailure(error))
            })
    }
}

export const getAllProductsRequest = () =>{
    return {
        type: GET_ALL_PRODUCTS_REQUEST,
    }
} 
export const getAllProductsSuccess = (products) =>{
    return {
        type:GET_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
} 
export const getAllProductsFailure = (error) =>{
    return {
        type:GET_ALL_PRODUCTS_FAILURE,
        payload: error
    }
} 

//FETCH PRODUCT BY ID
export const fetchOneProduct = (productId) => {

    return (dispatch) =>{
        dispatch(getOneProductRequest())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${productId}`)
            .then(product => {
                dispatch(getOneProductSuccess(product.data))
            })
            .catch(error => {
                dispatch(getOneProductFailure(error))
            })
    }
}

export const getOneProductRequest = () =>{
    return {
        type: GET_ONE_PRODUCT_REQUEST,
    }
} 
export const getOneProductSuccess = (product) =>{
    return {
        type:GET_ONE_PRODUCT_SUCCESS,
        payload: product
    }
} 
export const getOneProductFailure = (error) =>{
    return {
        type:GET_ONE_PRODUCT_FAILURE,
        payload: error
    }
} 




