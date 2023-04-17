export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product,
  },
});

export const setProducts = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: {
    products,
  },
});

export const removeProductFromCart = (product) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    product,
  },
});

export const fetchProductThunk = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCTS_LOADING });
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: { error: error.message || "Unexpected error" },
      });
    }
  };
};
