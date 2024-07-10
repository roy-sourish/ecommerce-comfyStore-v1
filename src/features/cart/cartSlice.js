import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 5.0,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    // add an item to cart
    addItem(state, action) {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartId === product.cartIdf);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      localStorage.setItem("cart", JSON.stringify(state));
      toast.success("Item added to cart!");
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
