import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import useReducer from "react";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: useReducer,
  },
});

export default store;
