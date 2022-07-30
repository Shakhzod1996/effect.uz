import React, { useEffect, useState } from "react";
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
import API from "../../API/API";
import { Link } from "react-router-dom";

export default function News() {

  const [news, setNews] = useState([])
  const [status, setStatus] = useState(false)

  const {t} = useTranslation()

  const fetchData = async () => {
    const response = await API.news()
    setNews(response.data.items)
  }

  const four = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    fetchData()
  }, [])

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
              {news.map((item) => {
                return (
                  <Link className="news-a" key={item.id} to={`/yangiliklar/${item.id}`}>
                  <NewsItem key={item.id} item={item} />
                  </Link>
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
              {news.map((item) => {
                return (
                  <Link  className="news-a" key={item.id} to={`/yangiliklar/${item.id}`}>
                  <NewsItem  item={item} />
                  </Link>
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
