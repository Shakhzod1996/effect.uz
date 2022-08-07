import React, { useEffect, useState } from "react";
import "./Ruknlar.css";
import Header from "../Header/Header";
import img1 from "../../assets/images/big-img.jfif";
import tex from "../../assets/images/tex.png";
import bugun from "../../assets/images/bugun.png";
import gift from "../../assets/images/gift.png";
import { useTranslation } from "react-i18next";
import API from "../../API/API";
import { Link } from "react-router-dom";

import RuknItem from "./RuknItem";
import RuknlarFourItem from "./RuknlarFourItem/RuknlarFourItem";
import RuknLeftBig from "./RuknLeftBig";

export default function () {
  const [newsFour, setNewsFour] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bigAlone, setBigAlone] = useState([]);

  const { t } = useTranslation();
  const params = {
    count: 4,
  };

  const params1 = {
    count: 1,
  };

  const fetchData = async () => {
    setLoading(false)
    const data = await API.newsFour(params);
    const alone = await API.newsFour(params1);


    setNewsFour(data.data.items.slice(0, params.count));
    setBigAlone(alone.data.items.slice(0, params1.count))

    const news = await API.news();
    setNews(news.data.items);
    // setNews(newsRest.data);
    setTimeout(() => {
      setLoading(true)
    }, 1000)
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading) {
    return (
      <div className="loading-div">
        <i className='bx bx-loader'></i>
      </div>
    )
  }

  return (
    <div className="ruknlar">
      <Header />

      <div className="last-news">
        <h2 className="last-news-title">{t("Политика")}</h2>

        <div className="img-container-flex">
          {bigAlone.map((item) => (

          <RuknLeftBig item={item} key={item.id} />
          ))}
          <div className="right-img-con">
            {newsFour.map((item) => {
              return (
                <Link
                  className="news-a"
                  key={item.id}
                  to={`/yangiliklar/${item.id}`}
                >
                  <RuknlarFourItem item={item} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="subscribe">
          <div>
            <div>
              <img src={gift} alt="img" />
              <p>Subscribe to Premium</p>
            </div>

            <div className="big-priced">
              <p>
                8$ <span>/m</span>
              </p>
              <button>Upgrade</button>
            </div>
          </div>
        </div>
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
                    key={item.id}
                    className="news-a"
                    to={`/yangiliklar/${item.id}`}
                  >
                    <RuknItem item={item} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* <div className="date-div two">
            <div className="blue-line"></div>
            <p>22.07.2022</p>
          </div> */}

          {/* <div className="news-cards-flex">
            <div className="right-news-container">
              {news.map((item) => {
                return (
                  <Link
                    key={item.id}
                    className="news-a"
                    to={`/yangiliklar/${item.id}`}
                  >
                    <RuknItem item={item} />
                  </Link>
                );
              })}
            </div>
          </div> */}

          <div className="btn-container">
            <button>{t("Перезагрузить")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
