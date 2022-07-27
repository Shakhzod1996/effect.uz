import React from "react";
import military from "../../assets/images/military.png";
import play from "../../assets/images/play.png";
import "./VideoNews.css";
import banner from "../../assets/images/banner.jfif";
import google from "../../assets/images/google.png";
import google1 from "../../assets/images/google1.png";
import { useTranslation } from "react-i18next";
import VideoItem from "./VideoItem/VideoItem";





export default function VideoNews() {
  const {t} = useTranslation()
  const five = [1, 2, 3, 4, 5];
  return (
    <div className="video-news">
      <div className="first-container">
        <div className="video-news-header">
          <h3>{t("Видео новости")}</h3>
        </div>

        <div className="video-news-flex">
          <div className="left-video-news">
            <img src={military} alt="military" />
            <div className="play-div">
              <img src={play} alt="img" />
            </div>

            <div className="bottom-background">
              <p>
                O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum
                qilindi
              </p>
            </div>
          </div>
          <div className="right-video-news">
            {five.map((item) => {
              return (
                <VideoItem key={item} />
              );
            })}

            <button className="bulimga-btn">{t("Перейти в раздел")}</button>
          </div>
        </div>
      </div>
      <div className="for-banner">
        <img src={banner} alt="img" />

        <div className="fo-banner-desc">
            <h1>{t("Будьте всегда в курсе")}</h1>
            <p>{t("Скачайте мобильное приложение Effect.uz и все новости с вами")}</p>

            <div className="btns-img">
              <button><img src={google} alt="img" /></button>
              <button><img src={google1} alt="img" /></button>
            </div>
        </div>
      </div>
    </div>
  );
}
