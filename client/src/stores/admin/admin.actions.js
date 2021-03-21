import axios from 'axios';
import '../../auxiliar/variables.js';

//FETCH ALL PRODUCTS FROM THE SERVER WITCH THUNK
export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAILURE = "GET_ALL_PRODUCTS_FAILURE";

//FETCH ONE PRODUCT FROM THE SERVER WITCH THUNK
export const GET_ONE_PRODUCT_REQUEST = "GET_ONE_PRODUCT_REQUEST";
export const GET_ONE_PRODUCT_SUCCESS = "GET_ONE_PRODUCT_SUCCESS";
export const GET_ONE_PRODUCT_FAILURE = "GET_ONE_PRODUCT_FAILURE";

//SEARCH BY NAME
export const SEARCH_PRODUCT_REQUEST = "SEARCH_PRODUCT_REQUEST";
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS"; 
export const SEARCH_PRODUCT_FAILURE = "SEARCH_PRODUCT_FAILURE"; 

//DELETE PRODUCT BY ID
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS"; 
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE"; 


export const fetchAllProducts = () => {

    return (dispatch) =>{
        dispatch(getAllProductsRequest())
        axios.get("http://localhost:3001/products/")
            .then(products => {
                dispatch(getAllProductsSuccess(products.data))
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
//DELETE PRODUCT
export const deleteProducts = (id) => {
    console.log("ESTE ES EL IDDDDDDDDDDDDDDDDDDDDD",id)
    return (dispatch) =>{
        dispatch(deleteProductsRequest())
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
          })
          .then(res => dispatch(deleteProductsSuccess()))  
          .catch(error => {
                dispatch(deleteProductsFailure(error))
         })
    }
}

export const deleteProductsRequest = () =>{
    return {
        type: DELETE_PRODUCT_REQUEST,
    }
} 
export const deleteProductsSuccess = () =>{
    return {
        type:DELETE_PRODUCT_SUCCESS,
    }
} 
export const deleteProductsFailure = (error) =>{
    return {
        type:DELETE_PRODUCT_FAILURE,
        payload: error
    }
} 

//FETCH PRODUCT BY ID
export const fetchOneProduct = (productId) => {

    return (dispatch) =>{
        dispatch(getOneProductRequest())
        axios.get(`http://localhost:3001/products/${productId}`)
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





