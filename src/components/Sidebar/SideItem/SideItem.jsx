import React from "react";
import cart from "../../../assets/images/cart.png";


export default function SideItem({item}) {
  return (
    <div className="kup-uqilgan-item" >
      <span>
        <img src={cart} alt="img" /> 11:45 | 13.07.2022
      </span>
      <p>
        {item.title_uz.substring(0, 50)}...
      </p>
    </div>
  );
}
