import React, { useState } from "react";
import pub from "../../assets/images/pub.jfif";
import clock from "../../assets/images/clock.png";
import mes from "../../assets/images/mess.png";
import budil from "../../assets/images/budil.png";


export default function RuknItem({item}) {
  const [status, setStatus] = useState(false);
  const mouseEnter = () => {
    setStatus(true);
  };

  const mouseLeave = () => {
    setStatus(false);
  };

  
  return (
    <div className="big-arr-div"
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave}>
      <div className="right-news-item">
        <img src={item.default_img} alt="pub" />
        <div className="right-news-item-inside">
          <h4>
            {item.title_uz.substring(0, 45)}...
          </h4>

          <div>
            <p>#{item.category_id}</p>
              <p>
                <img src={mes} alt="img" /> {item.comment_count} izoh
              </p>
          </div>
        </div>
        <div className="clock-absolute">
          <p>19:30</p>
          {status ? (
            <img src={budil} alt="build"className="budil-img"  />
          ) : (
            <img src={clock} alt="clock" className="clock-img" />
          )}
        </div>
      </div>
    </div>
  );
}
