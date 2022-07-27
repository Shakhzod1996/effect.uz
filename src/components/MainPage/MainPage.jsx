import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./MainPage.css";
import img1 from "../../assets/images/big-img.jfif";
import tex from "../../assets/images/tex.png";
import bugun from "../../assets/images/bugun.png";
import gift from "../../assets/images/gift.png";
import API from "../../API/API";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import AdverItem from "./AdverItem/AdverItem";
import NewsItem from "./NewsItem/NewsItem";

export default function MainPage() {

  const {t} = useTranslation()
  const [data, setData] = useState([]);
  const [newsFour, setNewsFour] = useState([]);

  const fetchData = async () => {
    try {
      const category = await API.category();
      const newsFour = await API.newsFour(4);

      setData(category.data);
      setNewsFour(newsFour.data)

    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  const four = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];

  console.log(newsFour);

  return (
    <div className="main-page">
        <Header />

        <div className="last-news">
          <h2 className="last-news-title">{t("Последние новости")}</h2>
          <div className="btn-sliders">
            <Swiper slidesPerView={8} spaceBetween={10} className="mySwiper">
              {data.map((item) => (
                <SwiperSlide key={item.id} >{item.name_uz}</SwiperSlide>
              ))}
              
            </Swiper>
          </div>

          <div className="img-container-flex">
            <div className="left-img-con">
              <img src={img1} alt="img" />

              <div className="tex-header-flex">
                <div>
                  <img src={tex} alt="tex" />
                  <p>Texnologiya</p>
                </div>

                <div>
                  <img src={bugun} alt="tex" />
                  <p>Bugun - 15:45</p>
                </div>
              </div>

              <h3>
                Samsung Galaxy F22 launched in India: Price, features, other
                details
              </h3>

              <p>
                Samsung Galaxy F22 has been launched in India. The new
                smartphone has been priced in the mid-range segment.
              </p>
            </div>
            <div className="right-img-con">
              {four.map((item) => {
                return (
                  <AdverItem key={item} item={item} />
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
          {six.map((item) => {
            return (
              <NewsItem key={item} />
            );
          })}
        </div>

        <div className="all-news-div">
          <button>{t("Все новости")}</button>
        </div>
    </div>
  );
}
