import React from "react";
import "./FotoNews.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/images/slide1.jfif";
import slide2 from "../../assets/images/slide2.jfif";
import slide3 from "../../assets/images/slide3.jfif";
import { useTranslation } from "react-i18next";

// import required modules
import { Pagination } from "swiper";

export default function FotoNews() {
  const { t } = useTranslation();
  return (
    <div className="foto-news">
      <div className="foto-news__header">
        <h3>{t("Фото новости")}</h3>
        <button>{t("Перейти в раздел")}</button>
      </div>

      <Swiper
        // slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

          1000: {
            slidesPerView: 4,
            spaceBetween: 15,
          },

          1100: {
            slidesPerView: 5,
            spaceBetween: 15,
          },

          1200: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide className="swipe_item">
          <img src={slide1} alt="img" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide2} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide3} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide1} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide2} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide2} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide1} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide2} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
        <SwiperSlide className="swipe_item">
          <img src={slide3} alt="" />
          <h4>
            Samsung Galaxy F22 launched in India: Price, features, other details
          </h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
