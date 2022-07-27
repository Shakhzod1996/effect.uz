import React from "react";
import football from "../../../assets/images/football.png";
import play from "../../../assets/images/play.png";
import clock from "../../../assets/images/clock.png";

export default function VideoItem() {
  return (
    <div className="right-video-item">
      <div className="for-img">
        <img src={football} alt="" />
        <div className="play-second-div">
          <img src={play} alt="play" />
        </div>
      </div>
      <div className="small-img-desc">
        <span>
          <img src={clock} alt="" /> 05.11.2022
        </span>
        <h4 className="h44">
          Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...
        </h4>
      </div>
    </div>
  );
}
