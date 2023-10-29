import { createSelector } from "reselect";

export const searchTextSelector = (state) => {
  return state.filters.search;
};

export const productsListSelector = (state) => {
  return state.products.productsList;
};
export const cartSelector = (state) => {
  return state.cart.items;
};
export const userSelector = (state) => {
  return state.user.infor;
};

// export const filterStatusSelector = (state) => {
//   return state.filters.status;
// };

// export const filterPrioritiesSelector = (state) => {
//   return state.filters.priorities;
// };

export const productsAfterFilter = createSelector(
  searchTextSelector,
  productsListSelector,
  (searchText, productsList) => {
    if (productsList.length === 0) {
      return [];
    } else {
      return productsList.filter((product) => {
        return product.name_product.toLowerCase().includes(searchText.toLowerCase());
      });
    }
  }
);

export const totalItem = createSelector(cartSelector, (cartSelector) => {
  // console.log(cartSelector);
  const total = cartSelector.reduce((total, item) => {
    return total + 1;
  }, 0);
  // console.log(total);
  return total;
});

export const totalMoney = createSelector(cartSelector, (cartSelector) => {
  // console.log(cartSelector);
  const total = cartSelector.reduce((total, item) => {
    return total + item.quantity * item.price_product;
  }, 0);
  // console.log(total);
  return total;
});

// cach lam thu cong khi serachText
// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });

//   return todoRemaining;
// };
