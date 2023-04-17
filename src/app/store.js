import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productSlice";

const store = configureStore({
  reducer: { cart: cartReducer, products: productsReducer },
});

export default store;
