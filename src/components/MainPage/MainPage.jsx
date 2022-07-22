import React from "react";
import Header from "./Header/Header";
import "./MainPage.css";
import img1 from "../../assets/images/big-img.jfif";
import tex from "../../assets/images/tex.png";
import bugun from "../../assets/images/bugun.png";
import insta from "../../assets/images/insta.png";
import gift from "../../assets/images/gift.png";
import pab from "../../assets/images/pub.jfif";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function MainPage() {
  const four = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];
  return (
    <div className="main-page">
      <Header />

      <div className="last-news">
        <h2 className="last-news-title">So'ngi Yangiliklar</h2>
        <div className="btn-sliders">
          <Swiper
            slidesPerView={8}
            spaceBetween={10}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="act">Barchasi</SwiperSlide>
            <SwiperSlide>Siyosat</SwiperSlide>
            <SwiperSlide>Jamiyat</SwiperSlide>
            <SwiperSlide>Sport</SwiperSlide>
            <SwiperSlide>Iqtisod</SwiperSlide>
            <SwiperSlide>Texnologiya</SwiperSlide>
            <SwiperSlide>Ilm-fan</SwiperSlide>
            <SwiperSlide>Turli-xil</SwiperSlide>
            <SwiperSlide>boshqalar</SwiperSlide>
          </Swiper>
        </div>

        <div className="img-container-flex">
          <div className="left-img-con">
            <img src={img1} alt="" />

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
              Samsung Galaxy F22 has been launched in India. The new smartphone
              has been priced in the mid-range segment.
            </p>
          </div>
          <div className="right-img-con">
            {four.map((item) => {
              return (
                <div className="right-img-items" key={item}>
                  <div>
                    <p>11:45 | 13.07.2022</p>
                    <h4>Card hover bo’lganda box-shadow o’zgarishi va color</h4>
                  </div>
                  <img src={insta} alt="img" />
                </div>
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
            <div key={item} className="technology-item">
              <p>Technology</p>

              <div>
                <h4>
                  Card hover bo’lganda title color o’zgarishi va card box-shadow
                  ham o’zgarmoqda
                </h4>
                <p>11:45 | 12 izoh</p>
              </div>

              <img src={pab} alt="img" />
            </div>
          );
        })}
      </div>

      <div className="all-news-div">
        <button>Barcha yangiliklar</button>
      </div>
    </div>
  );
}
