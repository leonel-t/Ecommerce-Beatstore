import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CAR_FAILURE,
    ADD_ITEM_TO_CARD_REQUEST,
    ADD_ITEM_TO_CARD_SUCCESS,
    ADD_ITEM_TO_CARD_FAILURE,
    DELETE_ITEM_CART_REQUEST,
    DELETE_ITEM_CART_SUCCESS,
    DELETE_ITEM_CART_FAILURE
} from './user.actions';

let initialState = {
    user:[],
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
                user: action.payload
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
            if(action.payload.user){
                return {
                    ...state,
                    cartLoading: false,
                    cart: action.payload
                    }
            }else{
                return {
                    ...state,
                    cartLoading: false,
                    }
            }
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
        case ADD_ITEM_TO_CARD_REQUEST:
            return {
                ...state,
                cartLoading: true
            }
        case ADD_ITEM_TO_CARD_SUCCESS:
            var aux = []
            if(state.cart.length > 0 ){

                for (let i = 0; i < state.cart.length; i++) {
                    if(state.cart[i].id === action.payload.id){
                        return {
                            ...state,
                            cartLoading: false,
                            }
                    }else{
                        aux.push(action.payload)
                    }
                }
                return {
                    ...state,
                    cartLoading: false,
                    cart: [...state.cart, aux[0]]
                    }
            }else{
                return {
                    ...state,
                    cartLoading: false,
                    cart: [...state.cart, action.payload]
                    }
            }

        case ADD_ITEM_TO_CARD_FAILURE:
            return {
                ...state,
                cartError: action.payload,
                cartLoading: false
            }
        case DELETE_ITEM_CART_REQUEST:
            return {
                ...state,
                cartLoading: true
            }
        case DELETE_ITEM_CART_SUCCESS:
            if(action.payload.deleteAll){
                return {
                    ...state,
                    cartLoading: false,
                    cart: []
                }
            }else{
                return {
                    ...state,
                    cartLoading: false,
                    cart: state.cart.filter((product)=>{
                        return product.id !== action.payload.productId
                        })
                    }
            }

        case DELETE_ITEM_CART_FAILURE:
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