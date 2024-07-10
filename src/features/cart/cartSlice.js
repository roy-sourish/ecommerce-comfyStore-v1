import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    // add an item to cart
    addItem(state, action) {
      console.log(action.payload);
    },

    // remove an item from cart
    removeItem(state, action) {},

    // edit an item
    editItem(state, action) {},

    // clear cart
    clearCart(state) {},
  },
});

// cart actions
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
