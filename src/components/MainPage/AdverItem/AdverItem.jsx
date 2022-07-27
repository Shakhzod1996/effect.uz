import React from "react";
import cart from "../../../assets/images/cart.png";
import insta from "../../../assets/images/insta.png";



export default function AdverItem() {
  return (
    <div className="right-img-items">
      <div>
        <p>
          <img src={cart} alt="img" />
          <span>11:45 | 13.07.2022</span>{" "}
        </p>
        <h4>Card hover bo’lganda box-shadow o’zgarishi va color</h4>
      </div>
      <img src={insta} alt="img" />
    </div>
  );
}
