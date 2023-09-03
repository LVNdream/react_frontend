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

      // console.log(1234);

      let new_cart = state.items;

      const exist_itemIndex_inCart = state.items.findIndex((product) => {
        return product.id_product === action.payload.id_product;
      });
      // console.log(exist_itemIndex_inCart);

      if (exist_itemIndex_inCart < 0) {
        state.items.push(action.payload);
      } else {
        new_cart[exist_itemIndex_inCart].quantity =
          new_cart[exist_itemIndex_inCart].quantity + action.payload.quantity;
        state.items = new_cart;
      }

      // console.log(state.items);
    },
    updateQuantityInCart: (state, action) => {
      // let new_cart = state.items;
      // console.log(new_cart);

      let new_cart = state.items;

      const exist_itemIndex_inCart = state.items.findIndex((product) => {
        return product.id_product === action.payload.id_product;
      });
      // console.log(exist_itemIndex_inCart);

      if (exist_itemIndex_inCart < 0) {
        state.items.push(action.payload);
      } else {
        new_cart[exist_itemIndex_inCart].quantity = action.payload.quantity;
        state.items = new_cart;
      }

      // console.log(state.items);
    },
  },
});
