import React from "react";
import cart from "../../../assets/images/cart.png";
import pab from "../../../assets/images/pub.jfif";
import mess from "../../../assets/images/mess.png";

export default function NewsItem({item}) {

  return (
    <div  className="technology-item">
      <p>{item.category_id}</p>

      <div>
        <h4>{item.title_uz.substring(0, 45)}...</h4>
        <div className="izoh-content">
          <p>
            <img src={cart} alt="img" />{item.created_date}
          </p>{" "}
          {item.comments.length > 0 ? (
            <p>
            | <img className="mess-img" src={mess} alt="img" /> {item.comments.length} izoh
          </p>
          ): null}
          
        </div>
      </div>

      <img src={pab} alt="img" className="pub" />
    </div>
  );
}
