import React, { useEffect, useState } from "react";
import cart from "../../../assets/images/cart.png";
import insta from "../../../assets/images/insta.png";
import API from "../../../API/API"

export default function AdverItem({item}) {

  return (
    <div className="right-img-items">
      <div>
        <p>
          <img src={cart} alt="img" />
          <span>| {item.created_date}</span>{" "}
        </p>
        <h4>{item.title_uz.substring(0, 45)}...</h4>
      </div>
      <img src={insta} alt="img" />
    </div>
  );
}
