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

//FETCH ALL CATEGORIES FROM THE SERVER WITH THUNK
export const GET_ALL_CATEGORIES_REQUEST = "GET_ALL_CATEGORIES_REQUEST";
export const GET_ALL_CATEGORIES_SUCCESS = "GET_ALL_CATEGORIES_SUCCESS";
export const GET_ALL_CATEGORIES_FAILURE = "GET_ALL_CATEGORIES_FAILURE";

//FETCH ONE CATEGORY FROM THE SERVER WITH THUNK
export const PUT_ONE_CATEGORY_REQUEST = "PUT_ONE_CATEGORY_REQUEST";
export const PUT_ONE_CATEGORY_SUCCESS = "PUT_ONE_CATEGORY_SUCCESS";
export const PUT_ONE_CATEGORY_FAILURE = "PUT_ONE_CATEGORY_FAILURE";

//FETCH ONE CATEGORY FROM THE SERVER WITH THUNK
export const DELETE_CATEGORY_REQUEST = "DELETE_CATEGORY_REQUEST";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE";

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
//DELETE PRODUCT
export const deleteProducts = (id) => {
    console.log("ESTE ES EL IDDDDDDDDDDDDDDDDDDDDD", id)
    return (dispatch) => {
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

export const deleteProductsRequest = () => {
    return {
        type: DELETE_PRODUCT_REQUEST,
    }
}
export const deleteProductsSuccess = () => {
    return {
        type: DELETE_PRODUCT_SUCCESS,
    }
}
export const deleteProductsFailure = (error) => {
    return {
        type: DELETE_PRODUCT_FAILURE,
        payload: error
    }
}

//FETCH PRODUCT BY ID
export const fetchOneProduct = (productId) => {

    return (dispatch) => {
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
export const getOneProductFailure = (error) => {
    return {
        type: GET_ONE_PRODUCT_FAILURE,
        payload: error
    }
}

//fetch Categories
export const fetchAllCategories = () => {

    return (dispatch) => {
        dispatch(fetchAllCategoriesRequest())
        axios.get("http://localhost:3001/categories/")
            .then(categories => {
                dispatch(fetchAllCategoriesSuccess(categories.data))
            })
            .catch(error => {
                dispatch(fetchAllCategoriesFailure(error))
            })
    }
}

export const fetchAllCategoriesRequest = () => {
    return {
        type: GET_ALL_CATEGORIES_REQUEST,
    }
}
export const fetchAllCategoriesSuccess = (categories) => {
    return {
        type: GET_ALL_CATEGORIES_SUCCESS,
        payload: categories
    }
}
export const fetchAllCategoriesFailure = (error) => {
    return {
        type: GET_ALL_CATEGORIES_FAILURE,
        payload: error
    }
}

//fetch Categories
export const putCategoryById = (idCat, category) => {

    return (dispatch) => {
        console.log(category)
        dispatch(putCategoryByIdRequest())
        const options = {
            method: 'PUT',
            url: `http://localhost:3001/categories/${idCat}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: category
        };

        axios.request(options)
            .then(category => {
                dispatch(putCategoryByIdSuccess(category.data))
            })
            .catch(error => {
                dispatch(putCategoryByIdFailure(error))
            })
    }
}

export const putCategoryByIdRequest = () => {
    return {
        type: PUT_ONE_CATEGORY_REQUEST,
    }
}
export const putCategoryByIdSuccess = (category) => {
    return {
        type: PUT_ONE_CATEGORY_SUCCESS,
        payload: category
    }
}
export const putCategoryByIdFailure = (error) => {
    return {
        type: PUT_ONE_CATEGORY_FAILURE,
        payload: error
    }
}

//DELETE CATEGORY
export const deleteCategory = (id) => {
    return (dispatch) => {
        dispatch(deleteCategoryRequest())
        fetch(`http://localhost:3001/categories/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                dispatch(deleteCategorySuccess())
                dispatch(fetchAllCategories())
            })
            .catch(error => {
                dispatch(deleteCategoryFailure(error))
            })
    }
}

export const deleteCategoryRequest = () => {
    return {
        type: DELETE_CATEGORY_REQUEST,
    }
}
export const deleteCategorySuccess = () => {
    return {
        type: DELETE_CATEGORY_SUCCESS,
    }
}
export const deleteCategoryFailure = (error) => {
    return {
        type: DELETE_CATEGORY_FAILURE,
        payload: error
    }
}

