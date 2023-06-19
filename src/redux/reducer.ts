import products from "../data/index.js";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "./actions.js";

const initialState: AppState = {
  products,
  cart: [],
};

const reducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [action.payload.product, ...state.cart] };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.product.id),
      };
    default:
      return state;
  }
};

export default reducer;
