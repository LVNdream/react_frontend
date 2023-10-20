import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const accessToken = Cookies.get("accessToken");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    infor:
      JSON.parse(window.localStorage.getItem("inforUser")) && accessToken
        ? JSON.parse(window.localStorage.getItem("inforUser"))
        : null,
  },

  reducers: {
    addUser: (state, action) => {
      // console.log(action.payload)
      state.infor = action.payload;

      window.localStorage.setItem("inforUser", JSON.stringify(state.infor));

      // console.log(state.items);
    },
    clearUser: (state, action) => {
      state.infor = null;
      window.localStorage.setItem("inforUser", JSON.stringify(state.infor));
    },
  },
});
