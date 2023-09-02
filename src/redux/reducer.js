// import headerSlice from "../components/layouts/layoutClient/components/filtersSlice";
// import { productsSlice } from "../page/Products/productsSlice";

// import { cartSlice } from "../page/Products/Cart/cartSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action),
    cart: cartReducer(state.cart, action),
    products: productsReducer(state.products, action),
  };
};

// const rootReducer = combineReducers({
//   filters: filtersReducer,
//   todoList: TodoListReducer,
// });

export default rootReducer;
