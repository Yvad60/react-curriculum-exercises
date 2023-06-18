export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export const addProductToCart = (product: Product): AddPRoductToCartAction => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product,
  },
});

export const removeProductFromCart = (product: Product): RemoveProductFromCartAction => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: {
    product,
  },
});

