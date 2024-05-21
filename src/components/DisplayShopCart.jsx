import React from "react";
import Cart from "./Cart";

function DisplayShopCart({ cartShoes, removeFromCart }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
      }}
    >
      {cartShoes.map((shoe) => {
        return (
          <Cart removeFromCart={removeFromCart} key={shoe.id} shoe={shoe} />
        );
      })}
    </div>
  );
}

export default DisplayShopCart;
