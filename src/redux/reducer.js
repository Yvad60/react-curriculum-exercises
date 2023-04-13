import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  SET_PRODUCTS,
} from "./actions";

const initialState = {
  products: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload.products };
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
