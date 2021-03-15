import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ONE_PRODUCT_REQUEST,
    GET_ONE_PRODUCT_SUCCESS,
    GET_ONE_PRODUCT_FAILURE,
    SEARCH_PRODUCT_SUCCESS,
    SEARCH_PRODUCT_FAILURE,
    SEARCH_PRODUCT_REQUEST
} from '../products/products.actions';

let initialState = {
    products:[],
    product:{},
    searchResults: [],
    Loading:true,
    Error:'',
}

const productsReducers = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                Loading: true
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                Loading: false,
                products: action.payload
                }
        case GET_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                Error: 'error 404',
                Loading: false
            }
        case GET_ONE_PRODUCT_REQUEST:
            return {
                ...state,
                Loading: true
            }
        case GET_ONE_PRODUCT_SUCCESS:
            return {
                ...state,
                Loading: false,
                product: action.payload
                }
        case GET_ONE_PRODUCT_FAILURE:
            return {
                ...state,
                Error: 'error 404',
                Loading: false
            }
        case SEARCH_PRODUCT_REQUEST:
            return {
                ...state,
                Loading: true
            }
        case SEARCH_PRODUCT_SUCCESS :
            return {
                ...state,
                Loading: false,
                searchResults: action.payload
            }
        case SEARCH_PRODUCT_FAILURE:
            return {
                ...state,
                Error: 'error 404',
                Loading: false
            }
        default: 
        return state;
    }
}

export default productsReducers;