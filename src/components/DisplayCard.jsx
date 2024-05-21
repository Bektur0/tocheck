import React from "react";
import Card from "./Card";

function DisplayCard({ shoes, addToCart }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
        }}
      >
        {shoes.map((shoe) => {
          return <Card addToCart={addToCart} key={shoe.id} shoe={shoe} />;
        })}
      </div>
    </div>
  );
}

export default DisplayCard;
