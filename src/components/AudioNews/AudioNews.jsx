import React from "react";
import Header from "../Header/Header";
import "./AudioNews.css";
import { useTranslation } from "react-i18next";
import AudioItem from "./AudioItem/AudioItem";

export default function AudioNews() {
  const { t } = useTranslation();
const eight = [1,2,3,4,5,6,7,8]
  return (
    <div className="audio-news">
      <Header />

      <div className="audio-header">
        <h2>{t("Аудио новости")}</h2>
      </div>

      <div className="audio-player-div">
        <h3>
          Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August
        </h3>

        <div className="player-flex">
          <div>
            <button className="small-arr-btn">
              <i className="bx bx-chevron-left"></i>
            </button>
            <button className="big-play-center">
              <i className="bx bx-play"></i>
            </button>
            <button className="small-arr-btn">
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>

          <div className="player-range-div">
            <p>01:25 / 03:38</p>
            <input type="range" className="long-range" />
            <input type="range" className="short-range" />
          </div>
        </div>
      </div>

      <div className="audio-container">
        {eight.map((item) => (
          <AudioItem key={item} />
        ))}
        <div className="yana-yuklash-div">

      <button>{t("Перезагрузить")}</button>
        </div>
      </div>
    </div>
  );
}
