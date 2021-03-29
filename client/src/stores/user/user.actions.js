import axios from 'axios';
//FETCH USER 
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
//FETCH CART 
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
//DISCOUNT
export const GET_CALCULATOR_TOTAL_PRICE = "GET_CALCULATOR_TOTAL_PRICE";
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

        axios.request(options).then(user => {
                
                setTimeout(()=>{
                    dispatch(getUserSuccess(user));
                    dispatch(fetchCart({userState:true, id:user.data.user.id}));
                },100);
                
            }).catch(error => {
                dispatch(getUserFailure(error));
                dispatch(fetchCart({userState:false}));
            });
    };
};

export const getUserRequest = () =>{
    return {
        type: GET_USER_REQUEST,
    };
}; 
export const getUserSuccess = (user) =>{
    return {
        type:GET_USER_SUCCESS,
        payload: user
    };
}; 
export const getUserFailure = (error) =>{
    return {
        type:GET_USER_FAILURE,
        payload: error
    };
}; 

//GET CART
export const fetchCart = (user) => {

    return (dispatch) =>{

    if(user.userState){

        /*
                let LocalCart = JSON.parse(localStorage.getItem('localCart'));

        if(LocalCart){

            if(LocalCart.length > 0){

                for (let i = 0; i < LocalCart.length; i++) {
                    console.log("ADD TIMENTS", LocalCart[i].product )
                    console.log("ADD ITEM USER", user)

                    return async ()=>{
                        await addItemToCart(user, LocalCart[i].product )
                    }
                    
                };

                
            }
        }
        localStorage.setItem('localCart', "[]");
        
        */
            
        dispatch(getCartRequest());

            axios.get(`http://localhost:3001/order/user/${user.id}`)
                .then(cart => {
                    dispatch(getCartSuccess(user, cart.data[0]));
                    dispatch(getCalculator())
                })
                .catch(error => {
                    dispatch(getCartFailure(error));
                })
        
        }else{
            let localCart = localStorage.getItem('localCart');
            if(localCart){
                dispatch(getCartSuccess(false, JSON.parse(localCart)));
            }else{
                localStorage.setItem('localCart', "[]");
            };
            dispatch(getCalculator())
        };
    };
};

export const getCartRequest = () =>{
    return {
        type: GET_CART_REQUEST,
    };
}; 
export const getCartSuccess = (user, cart) =>{
    let obj ={
        user, 
        cart
    };
    return {
        type:GET_CART_SUCCESS,
        payload: obj
    };
} 
export const getCartFailure = (error) =>{
    return {
        type:GET_CAR_FAILURE,
        payload: error
    };
};

//ADD ITEM TO CART
export const addItemToCart = (user, product) => {
   
    return (dispatch) =>{

        if(user.userStatus){

            var previusProduct= {
                productId:product.id,
                product:product,
                price:product.price,
                subtotal:0,
                orderId:user.orderId
            };
            
            const options = {
                method: 'POST',
                url: 'http://localhost:3001/orderline/',
                headers: {
                'Content-Type': 'application/json'
                },
                data: previusProduct
            };
            
            return axios.request(options).then(function (orderLine) {
                dispatch(addItemToCartSuccess(orderLine.data));
            }).catch(function (error) {
                dispatch(getCartFailure(error));
            });

            }else{
                var auxCart = [];
                let LocalCart = JSON.parse(localStorage.getItem('localCart'));

                var previusProductAnon= {
                    productId:product.id,
                    product:product,
                    price:product.price,
                    subtotal:0,
                    orderId:"anonuser"
                };

                if(LocalCart){

                    if(LocalCart.length > 0){

                        for (let i = 0; i < LocalCart.length; i++) {
                            auxCart.push(LocalCart[i]);
                        };

                        let repeteProduct;

                        for (let j = 0; j < auxCart.length; j++) {
                            
                            if(auxCart[j].productId === previusProductAnon.productId){
                                repeteProduct = true;
                            };                        
                        };

                        if(!repeteProduct){
                            auxCart.push(previusProductAnon);
                            localStorage.setItem('localCart', JSON.stringify(auxCart));
                            dispatch(fetchCart(false));
                        };
                    
                    }else{
                        auxCart.push(previusProductAnon);
                        localStorage.setItem('localCart', JSON.stringify(auxCart));
                        dispatch(fetchCart(false));
                    };
                };

            };
    };
};

export const addItemToCartRequest = () =>{
    return {
        type: ADD_ITEM_TO_CARD_REQUEST,
    };
};
export const addItemToCartSuccess = (product) =>{
    return {
        type:ADD_ITEM_TO_CARD_SUCCESS,
        payload: product
    };
};
export const addItemToCartFailure = (error) =>{
    return {
        type:ADD_ITEM_TO_CARD_FAILURE,
        payload: error
    };
};

//GET CALCULATOR TOTAL PRICE
export const getCalculator = () =>{
    return {
        type:GET_CALCULATOR_TOTAL_PRICE,
    };
}; 

//COUPON CODE----------------------------------------FALTA USER
export const getDiscountCoupon = (code, user) => {

    if(user.userStatus){

        return (dispatch)=>{
            dispatch(getDiscountCouponAction(code));
            dispatch(fetchCart(user));
        };
     }else{
        return (dispatch)=>{
            dispatch(getDiscountCouponAction(code));
            dispatch(fetchCart(user));
          };
     }

}

export const getDiscountCouponAction = (code) =>{
    return {
        type: GET_DISCOUNT_COUPON,
        payload: code
    };
};

//DELETE ITEM CART
export const deleteItemInCart = (orderLineId, user, idProduct) => {

    return async (dispatch)=>{

        if(user.userState){

            console.log("ORDER LINE ID", orderLineId)
            const options = {
                method: 'DELETE',
                url: `http://localhost:3001/orderline/${orderLineId}`,
              };
         return await axios.request(options).then(response => {
                    dispatch(fetchCart(user));
                }).catch(error => {
                    dispatch(getCartFailure(error));
                })          
        }else{
            var auxCart = [];
            let LocalCart = JSON.parse(localStorage.getItem('localCart'));

            if(LocalCart){

                if(LocalCart.length > 0){

                    for (let i = 0; i < LocalCart.length; i++) {
                        if(LocalCart[i].productId === idProduct){
                            console.log("IGUALES", LocalCart[i].productId, " / ", idProduct);
 
                         }else{
                              auxCart.push(LocalCart[i]);
                         };    
                    };

                    localStorage.setItem('localCart', JSON.stringify(auxCart));
                    dispatch(fetchCart(false));
                
                };
            };
        };
    };
};

export const deleteItemCartRequest = () =>{
    return {
        type: DELETE_ITEM_CART_REQUEST,
    };
};
export const deleteItemCartSuccess = (productId, deleteAll) =>{
    let obj = {
        productId,
        deleteAll
    };
    return {
        type:DELETE_ITEM_CART_SUCCESS,
        payload: obj
    };
};
export const deleteItemCartFailure = (error) =>{
    return {
        type:DELETE_ITEM_CART_FAILURE,
        payload: error
    };
};

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
                    dispatch(getCartFailure(error));
                })          
        }else{
            localStorage.setItem('localCart', JSON.stringify([]));
            dispatch(fetchCart(false));
        };
    };
};
