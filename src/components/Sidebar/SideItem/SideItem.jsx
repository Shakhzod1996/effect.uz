import React from "react";
import cart from "../../../assets/images/cart.png";


export default function SideItem() {
  return (
    <div className="kup-uqilgan-item" >
      <span>
        <img src={cart} alt="img" /> 11:45 | 13.07.2022
      </span>
      <p>
        The price of petrol remained unchanged on July 6 after reaching a new
        record high on.
      </p>
    </div>
  );
}
