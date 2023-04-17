import {
  ADD_PRODUCT_TO_CART,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
} from "./actions";

const initialState = {
  products: [],
  cart: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload.products, loading: false };

    case FETCH_PRODUCTS_LOADING:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_ERROR:
      return { ...state, loading: false, error: action.payload.error };

    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [action.payload.product, ...state.cart] };

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product.id !== action.payload.product.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
