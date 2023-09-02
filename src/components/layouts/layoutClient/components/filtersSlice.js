import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: ""
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
  },
});
