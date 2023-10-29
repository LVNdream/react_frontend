// import headerSlice from "../components/layouts/layoutClient/components/filtersSlice";
// import { productsSlice } from "../page/Products/productsSlice";

import { useReducer } from "react";

// import { cartSlice } from "../page/Products/Cart/cartSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action),
    cart: cartReducer(state.cart, action),
    products: productsReducer(state.products, action),
    user:useReducer(state.infor,action),
    products_daban:useReducer(state.products_daban)
  };
};

// const rootReducer = combineReducers({
//   filters: filtersReducer,
//   todoList: TodoListReducer,
// });

export default rootReducer;
