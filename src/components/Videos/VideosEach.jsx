import React, { useState } from 'react'
import pub from "../../assets/images/pub.jfif";
import cart from "../../assets/images/cart.png";
import vawe from "../../assets/images/vawe.png"


export default function VideosEach({item, videoClicked}) {

  const [status, setStatus] = useState(false);

  return (
    <div className="audio-item" onClick={() => videoClicked(item.id)}>
      <img src={item.default_img} alt="img" />
      <div className="audio-item-desc">
        <h3>
          {item.title_uz}
        </h3>

        <div className="audio-item-desc-flex">
          <div>
            <img src={cart} alt="cart" />
            <p>11:45 | {item.created_date}</p>
          </div>
          <div className="audio-item-desc-btns">
            <button>Tech</button>
            <button>Mobile</button>
          </div>
        </div>
      </div>

      <img src={vawe} alt="img" className="vawe"/>
    </div>
  )
}
