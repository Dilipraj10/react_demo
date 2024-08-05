import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  
  const items = useSelector(state => state)
  const price = items.cart.reduce((a,b) => a + b.price, 0)
  return (
    <div style={{ justifyContent: "center", textAlign: "center" }}>
      <h3>item: {items.cart.length} & amount: {price}</h3>
    </div>
  );
}
