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
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const fetchData = async () => {
    try {
      setLoading(false);

      const response = await API.news();
      setNews(response.data.items);
      // setNews(newsRest.data);

      setTimeout(() => {
        setLoading(true);
      }, 1000);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading) {
    return (
      <div className="loading-div">
        <i className='bx bx-loader'></i>
      </div>
    );
  }

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
                  <Link
                    className="news-a"
                    key={item.id}
                    to={`/yangiliklar/${item.id}`}
                  >
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
                  <Link
                    className="news-a"
                    key={item.id}
                    to={`/yangiliklar/${item.id}`}
                  >
                    <NewsItem item={item} />
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
