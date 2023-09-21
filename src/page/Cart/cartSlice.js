import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(window.localStorage.getItem("cartItems"))
      ? JSON.parse(window.localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      // let new_cart = state.items;
      // console.log(new_cart);

      // console.log(1234);

      let new_cart = state.items;

      const exist_itemIndex_inCart = state.items.findIndex((product) => {
        return (
          product.id_product === action.payload.id_product &&
          product.size === action.payload.size &&
          product.color === action.payload.color
        );
      });
      // console.log(exist_itemIndex_inCart);

      if (exist_itemIndex_inCart < 0) {
        state.items.push(action.payload);
      } else {
        new_cart[exist_itemIndex_inCart].quantity =
          new_cart[exist_itemIndex_inCart].quantity + action.payload.quantity;
        state.items = new_cart;
      }

      window.localStorage.setItem("cartItems", JSON.stringify(state.items));

      // console.log(state.items);
    },
    updateQuantityInCart: (state, action) => {
      // let new_cart = state.items;
      // console.log(new_cart);

      let new_cart = state.items;
      // console.log(new_cart);

      const exist_itemIndex_inCart = state.items.findIndex((product) => {
        return (
          product.id_product === action.payload.id_product &&
          product.size === action.payload.size &&
          product.color === action.payload.color
        );
      });
      // console.log(exist_itemIndex_inCart);

      if (exist_itemIndex_inCart < 0) {
        state.items.push(action.payload);
      } else {
        new_cart[exist_itemIndex_inCart].quantity = action.payload.quantity;
        state.items = new_cart;
      }
      window.localStorage.setItem("cartItems", JSON.stringify(state.items));

      // console.log(state.items);
    },
    DeleteItemInCart: (state, action) => {
      // console.log(state.items);
      // console.log(action.payload.id_product);
      // console.log(action.payload.size);
      // console.log(action.payload.color);

      const newCart = state.items.filter((item) => {
        // console.log(
        //   !(
        //     item.id_product === action.payload.id_product &&
        //     item.size === action.payload.size &&
        //     item.color === action.payload.color
        //   )
        // );

        return !(
          item.id_product === action.payload.id_product &&
          item.size === action.payload.size &&
          item.color === action.payload.color
        );
      });

      // // console.log(newCart);
      state.items = newCart;
      window.localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      state.items = [];
      window.localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});
