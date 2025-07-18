import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  shipping: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart or increase quantity if it already exits
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.total += item.price;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    selectShipping: (state, action) => {
      state.shipping = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, selectShipping } = cartSlice.actions;
export default cartSlice.reducer;
