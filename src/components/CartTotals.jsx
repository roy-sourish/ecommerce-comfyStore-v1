import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils/indexAxios";

function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return <div>CartTotals</div>;
}

export default CartTotals;
