import { createSelector } from "reselect";

export const searchTextSelector = (state) => {
  return state.filters.search;
};

export const productsListSelector = (state) => {
  return state.products.productsList
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


    // const aaaaa=productsList.productsList.filter((product) => {
    //     return product.name.includes(searchText);
    //   });
    //   console.log(aaaaa);
    // ///
    // console.log(productsList);
    // console.log(productsList);

    if (productsList.length === 0) {
        return []
    } else {
      return productsList.filter((product) => {
        return product.name_product.includes(searchText);
      });
    }
  }
);

// cach lam thu cong khi serachText
// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });

//   return todoRemaining;
// };
