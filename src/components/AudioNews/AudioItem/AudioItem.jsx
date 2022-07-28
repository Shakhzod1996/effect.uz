import React, { useState } from "react";
import pub from "../../../assets/images/pub.jfif";
import cart from "../../../assets/images/cart.png";
import vawe from "../../../assets/images/vawe.png"

export default function AudioItem() {
  const [status, setStatus] = useState(false);
  return (
    <div className="audio-item" onClick={() => setStatus(true)}>
      <img src={pub} alt="img" />
      <div className="audio-item-desc">
        <h3>
          Playing card effect and box shadow effect. Audio wave chiqib turadi
          play bo’lganda. Default holatda 1-si play bo’ladi. text color ham
          o’zgaradi
        </h3>

        <div className="audio-item-desc-flex">
          <div>
            <img src={cart} alt="cart" />
            <p>11:45 | 13.07.2022</p>
          </div>
          <div className="audio-item-desc-btns">
            <button>Tech</button>
            <button>Mobile</button>
          </div>
        </div>
      </div>

      <img src={vawe} alt="img" className="vawe"/>
    </div>
  );
}
