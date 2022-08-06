import React from "react";
import cart from "../../../assets/images/cart.png";
import pab from "../../../assets/images/pub.jfif";
import mess from "../../../assets/images/mess.png";

export default function NewsItem({ item }) {
  return (
    <div className="technology-item">
      <p>{item.category_id}</p>

      <div className="news-item-fflex">
        <h4>{item.title_uz.substring(0, 45)}...</h4>
        <div className="izoh-content">
          <p>
            <img src={cart} alt="img" />
            {item.created_date}
          </p>{" "}
          <p className="bot-absolute">
            | <img className="mess-img" src={mess} alt="img" />{" "}
            {item.comment_count} izoh
          </p>
        </div>
      </div>

      <img src={item.default_img} alt="img" className="pub" />
    </div>
  );
}
