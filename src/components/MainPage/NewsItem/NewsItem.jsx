import React from "react";
import cart from "../../../assets/images/cart.png";
import pab from "../../../assets/images/pub.jfif";
import mess from "../../../assets/images/mess.png";

export default function NewsItem() {
  return (
    <div  className="technology-item">
      <p>Technology</p>

      <div>
        <h4>Avvalgi kun xabarlari uchun sana ham chiqib turadi.</h4>
        <div className="izoh-content">
          <p>
            <img src={cart} alt="img" /> 11:45 |{" "}
          </p>{" "}
          <p>
            <img src={mess} alt="img" /> 12 izoh
          </p>
        </div>
      </div>

      <img src={pab} alt="img" className="pub" />
    </div>
  );
}
