import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // state.push(action.payload);
      const { isbn13, quantity } = action.payload;

      const existingItem = state.find((item) => item.isbn13 === isbn13);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.push({ ...action.payload, quantity });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.isbn13 !== action.payload);
    },

    updateQuantity(state, action) {
      const { isbn13, quantity } = action.payload;
      const existingItem = state.find((item) => item.isbn13 === isbn13);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
