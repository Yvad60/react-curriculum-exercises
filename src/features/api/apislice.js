import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (buider) => ({
    getProducts: buider.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
