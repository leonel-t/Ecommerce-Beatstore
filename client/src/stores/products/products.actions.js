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
export const GET_LIKES_PRODUCT_SUCCESS = "GET_LIKES_PRODUCT_SUCCESS";
//SEARCH BY NAME
export const SEARCH_PRODUCT_REQUEST = "SEARCH_PRODUCT_REQUEST";
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS";
export const SEARCH_PRODUCT_FAILURE = "SEARCH_PRODUCT_FAILURE";

//POST COMMENT
export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";
//FILTER BY GENRE
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"


//GET PRODUCT CATEGORI
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";




export const getProductsByCategories = (cats) => {
    return (dispatch) => {
        if (cats) {

            var products = []
            for (let i = 0; i < cats.length; i++) {
                axios.get("http://localhost:3001/products/productsbycategories/" + cats[i])
                    .then(p => {
                        if (p.data.length > 0) {

                            for (let e = 0; e < p.data.length; e++) {

                                if (p.data[e].products.length > 0) {
                                    for (let j = 0; j < p.data[e].products.length; j++) {
                                        products.push(p.data[e].products[j])
                                    }

                                }

                            }

                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        }
        dispatch(productsToReducers(products))
    }
}
export const productsToReducers = (prod) => {
    return {
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: prod
    }
}

export const fetchAllProducts = () => {

    return (dispatch) => {
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

export const getAllProductsRequest = () => {
    return {
        type: GET_ALL_PRODUCTS_REQUEST,
    }
}
export const getAllProductsSuccess = (products) => {
    return {
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: products
    }
}
export const getAllProductsFailure = (error) => {
    return {
        type: GET_ALL_PRODUCTS_FAILURE,
        payload: error
    }
}

//FETCH PRODUCT BY ID
export const fetchOneProduct = (productId) => {

    return (dispatch) => {
        dispatch(getOneProductRequest())
        setTimeout(()=>{
            axios.get(`http://localhost:3001/products/${productId}`)
            .then(product => {
                try{
                    dispatch(getOneProductSuccess(product.data))
                    for (let i = 0; i < product.data.likes.length; i++) {
                        var likes = i 
                        console.log("likes", i )             
                    }   
                }catch(error){
                    
                }finally{
                    return dispatch(getLikes(likes))
                }
            })
            .catch(error => {
                dispatch(getOneProductFailure(error))
            })
        },500)
        
    }
}

export const getOneProductRequest = () => {
    return {
        type: GET_ONE_PRODUCT_REQUEST,
    }
}
export const getOneProductSuccess = (product) => {
    return {
        type: GET_ONE_PRODUCT_SUCCESS,
        payload: product
    }
}
export const getLikes = (likes) => {
    return {
        type: GET_LIKES_PRODUCT_SUCCESS,
        payload: likes
    }
}
export const getOneProductFailure = (error) => {
    return {
        type: GET_ONE_PRODUCT_FAILURE,
        payload: error
    }
}

//ADD LIKE TO PRODUCT
export const fetchAddLikeToProduct = (IdProduct, like, author,idUser) => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            url: `http://localhost:3001/likes/${IdProduct}`, 
            headers: {
                ContentType: "application/json",
            },
            data: {
                like: like,
                author:author,
                idUser:idUser
            }
        };

        try {
            return axios.request(options)
        } catch {
            return console.log("Error")
        } finally {
            return dispatch(fetchOneProduct(IdProduct))
        }

    }
}

//PRUEBA PARA QUE TRAIGA POR NOMBRE
export const searchProducts = (products) => {

    return (dispatch) => {
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

export const searchProductRequest = () => {
    return {
        type: SEARCH_PRODUCT_REQUEST,
    }
}
export const searchProductSuccess = (product) => {
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        payload: product
    }
}
export const searchProductFailure = (error) => {
    return {
        type: SEARCH_PRODUCT_FAILURE,
        payload: error
    }
}

//POST COMMENT
export const postComment = (productId, comment) => {

    return (dispatch) => {

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
                    comment: comment.text
                }
            }
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
export const postCommentRequest = () => {
    return {
        type: POST_COMMENT_REQUEST,
    }
}
export const postCommentSuccess = () => {
    return {
        type: POST_COMMENT_SUCCESS,
    }
}
export const postCommentFailure = (error) => {
    return {
        type: POST_COMMENT_FAILURE,
        payload: error
    }
}

export function filterbyGenre(genre) {
    return { type: FILTER_BY_GENRE, payload: genre }
}