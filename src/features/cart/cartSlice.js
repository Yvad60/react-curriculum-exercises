import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) =>
      state.filter((product) => product.id !== action.payload.id),
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
