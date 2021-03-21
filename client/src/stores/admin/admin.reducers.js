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
} from "../products/products.actions";
import {
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE
} from "../admin/admin.actions";
 
let initialState = {
  products: [],
  productsLoading: true,
  productsError: "",
  product: {},
  productLoading: true,
  productError: "",
  searchResults: [],
  searchLoading: true,
  searchError: "",
  deleteProductError: "",
  deleteProductLoading: true,
};

const adminReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        productsLoading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        productsError: "error 404",
        productsLoading: false,
      };
      case DELETE_PRODUCT_REQUEST:
        return {
          ...state,
          deleteProductLoading: true,
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          deleteProductLoading: false,
        };
      case DELETE_PRODUCT_FAILURE:
        return {
          ...state,
          deleteProductError: "error 404",
          deleteProductLoading: false,
        };
    case GET_ONE_PRODUCT_REQUEST:
      return {
        ...state,
        productLoading: true,
      };
    case GET_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        productLoading: false,
        product: action.payload,
      };
    case GET_ONE_PRODUCT_FAILURE:
      return {
        ...state,
        productError: "error 404",
        productLoading: false,
      };
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        searchLoading: true,
      };
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        searchLoading: false,
        searchResults: action.payload,
      };
    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        searchError: "error 404",
        searchLoading: false,
      };
    default:
      return state;
  }
};

export default adminReducers;
