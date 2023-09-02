import { configureStore } from "@reduxjs/toolkit";
import { filtersSlice } from "../components/layouts/layoutClient/components/filtersSlice";
import { productsSlice } from "../page/Products/productsSlice";
import { cartSlice } from "../page/Cart/cartSlice";


const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    products: productsSlice.reducer,
    cart:cartSlice.reducer

  },
});

export default store;