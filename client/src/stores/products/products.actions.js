import axios from 'axios';
import '../../auxiliar/variables.js';
import { serverUrl } from '../../auxiliar/variables.js';

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

//POST COMMENT
export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS"; 
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";



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

//PRUEBA PARA QUE TRAIGA POR NOMBRE
export const searchProducts = (products) => {

    return (dispatch) =>{
        dispatch(searchProductRequest())
        axios.get(`${serverUrl}/products/search/${products}`)
            .then(products => {
                dispatch(searchProductSuccess(products.data))
            })
            .catch(error => {
                dispatch(searchProductFailure(error))
            })
    }
}

export const searchProductRequest = () =>{
    return {
        type: SEARCH_PRODUCT_REQUEST,
    }
} 
export const searchProductSuccess = (product) =>{
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        payload: product
    }
} 
export const searchProductFailure = (error) =>{
    return {
        type: SEARCH_PRODUCT_FAILURE,
        payload: error
    }
} 

//POST COMMENT
export const postComment = (productId, comment) => {
    
    return (dispatch) =>{

        dispatch(postCommentRequest())
        const options = {
            method: "POST",
            url: "http://localhost:3001/comments",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem("token")
               },
            data: {
                idProduct: productId,
                comment: {
                    author: comment.author, 
                    comment: comment.text}}
          };
          axios.request(options).then(() => {
                dispatch(fetchOneProduct(productId))
                dispatch(postCommentSuccess())
            })
            .catch(error => {
                dispatch(postCommentFailure(error))
            })

    }

}
export const postCommentRequest = () =>{
    return {
        type: POST_COMMENT_REQUEST,
    }
} 
export const postCommentSuccess = () =>{
    return {
        type: POST_COMMENT_SUCCESS,
    }
} 
export const postCommentFailure = (error) =>{
    return {
        type: POST_COMMENT_FAILURE,
        payload: error
    }
} 
