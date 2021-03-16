import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CAR_FAILURE
} from './user.actions';

let initialState = {
    user:{},
    userLoading:true,
    userError:"",
    cart:[],
    cartLoading:true,
    cartError:""
}

const userReducers = (state = initialState, action) =>{
    switch(action.type){
        case GET_USER_REQUEST:
            return {
                ...state,
                userLoading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                userLoading: false,
                products: action.payload
                }
        case GET_USER_FAILURE:
            return {
                ...state,
                userError: action.payload,
                userLoading: false
            }
        case GET_CART_REQUEST:
            return {
                ...state,
                cartLoading: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                cartLoading: false,
                cart: action.payload
                }
        case GET_CAR_FAILURE:
            return {
                ...state,
                cartError: action.payload,
                cartLoading: false
            }
        default: 
        return state;
    }
}

export default userReducers;