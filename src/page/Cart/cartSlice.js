import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // let new_cart = state.items;
      // console.log(new_cart);

      const exist_itemIndex_inCart = state.items.findIndex((product) => {
        return product.id_product === action.payload.id_product;
      });
      console.log(exist_itemIndex_inCart);

      if (exist_itemIndex_inCart<0) {
        state.items.push(action.payload);
      }
      
      // console.log(state.items);
    },
  },
});
