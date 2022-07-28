import React, { useState } from "react";
import Header from "../Header/Header";
import "./News.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import NewsItem from "./NewsItem/NewsItem";

export default function News() {

  const {t} = useTranslation()

  const [status, setStatus] = useState(false)
  const four = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];

  return (
    <div className="news">
      <Header />
      <div className="last-news">
        <h2 className="last-news-title">{t("Новости")}</h2>

        <div className="news-bot-main">
          <div className="date-div">
            <div className="blue-line"></div>
            <p>22.07.2022</p>
          </div>

          <div className="news-cards-flex">
            <div className="right-news-container">
              {four.map((item) => {
                return (
                  <NewsItem key={item} />
                );
              })}
            </div>
          </div>

          <div className="date-div two">
            <div className="blue-line"></div>
            <p>22.07.2022</p>
          </div>

          <div className="news-cards-flex">
            <div className="right-news-container">
              {six.map((item) => {
                return (
                  <NewsItem key={item} />
                );
              })}
            </div>
          </div>

          <div className="btn-container">
            <button>{t("Перезагрузить")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
