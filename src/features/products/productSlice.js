import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default productsSlice.reducer;
