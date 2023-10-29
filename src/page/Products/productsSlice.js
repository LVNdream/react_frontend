import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList:[]
  },
  reducers: {
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});
