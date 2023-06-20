import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({ reducer: cartReducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
