import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apislice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
