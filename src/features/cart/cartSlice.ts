import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) =>
      state.filter((product) => product.id !== action.payload.id),
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
