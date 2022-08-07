import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./MainPage.css";
import img1 from "../../assets/images/big-img.jfif";

import gift from "../../assets/images/gift.png";
import API from "../../API/API";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import AdverItem from "./AdverItem/AdverItem";
import NewsItem from "./NewsItem/NewsItems";
import LeftAloneBig from "./LeftAloneBig";

export default function MainPage() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [newsFour, setNewsFour] = useState([]);
  const [newsRest, setNewsRest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bigAlone, setBigAlone] = useState([]);
  const [sorted, setSorted] = useState([]);

  const params = {
    count: 4,
  };

  const params1 = {
    count: 1,
  };

  const fetchData = async () => {
    try {
      setLoading(false);
      const category = await API.category();
      const newsEnd = await API.newsFour(params);
      const alone = await API.newsFour(params1);

      const newsRest = await API.news();

      setData(category.data);
      setNewsFour(newsEnd.data.items.slice(0, params.count));
      setNewsRest(newsRest.data.items);
      setBigAlone(alone.data.items.slice(0, params1.count));
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortCategoryHandler = async (id) => {
    try {
      const sort = await API.sortByCategory(id)
      setSorted(sort.data.items)
    } catch (error) {
      console.log(error);
    }
  }

  if (!loading) {
    return (
      <div className="loading-div">
        <i className="bx bx-loader"></i>
      </div>
    );
  }

  return (
    <div className="main-page">
      <div className="main-page-bottom">
        <Header />
        <div className="last-news">
          <h2 className="last-news-title">{t("Последние новости")}</h2>
          <div className="btn-sliders">
            <Swiper  slidesPerView={8} spaceBetween={10} className="mySwiper">
              {data.map((item) => (
                <SwiperSlide onClick={() => sortCategoryHandler(item.id)} key={item.id}>{item.name_uz}</SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="img-container-flex">
            {bigAlone.map((item, index) => (
              <Link className="news-a"key={item.id}  to={`/yangiliklar/${item.id}`}>
                <LeftAloneBig item={item} />
              </Link>
            ))}

            <div className="right-img-con">
              {newsFour.map((item) => {
                return (
                  <Link
                    to={`/yangiliklar/${item.id}`}
                    className="news-a"
                    key={item.id}
                  >
                    <AdverItem item={item} />
                  </Link>
                );
              })}
            </div>
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

        <div className="technology-grid">
          {newsRest.map((item) => {
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

        {/* <div className="all-news-div">
          <button onClick={() => MoreNewsByClicked()}>{t("Все новости")}</button>
        </div> */}
      </div>
    </div>
  );
}
