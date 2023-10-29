import { createSlice } from "@reduxjs/toolkit";

export const thongkeSlice = createSlice({
  name: "products_daban",
  initialState: {
    productsdaban_List:[]
  },
  reducers: {
    setProductsdaban_List: (state, action) => {
      state.productsdaban_List = action.payload;
    },
  },
});