export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product,
  },
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
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
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    dispatch(setProducts(data));
  };
};
