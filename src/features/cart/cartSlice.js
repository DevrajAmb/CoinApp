import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
