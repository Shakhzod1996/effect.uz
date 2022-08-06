import React from "react";
import cart from "../../../assets/images/cart.png";
import insta from "../../../assets/images/insta.png";



export default function RuknlarFourItem({item}) {
  return (
    <div className="right-img-items">
      <div>
        <p>
          <img src={cart} alt="img" />
          <span>| {item.created_date}</span>{" "}
        </p>
        <h4>{item.title_uz.substring(0,45)}...</h4>
      </div>
      <img src={item.default_img} alt="img" />
    </div>
  );
}
