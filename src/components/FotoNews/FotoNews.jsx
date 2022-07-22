import React from "react";
import "./FotoNews.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../assets/images/slide1.jfif";
import slide2 from "../../assets/images/slide2.jfif";
import slide3 from "../../assets/images/slide3.jfif";

// import required modules
import { Pagination } from "swiper";

export default function FotoNews() {
  return (
    <div className="foto-news">
      <div className="foto-news__header">
        <h3>Foto-yangiliklar</h3>
        <button>Bulimga utish</button>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper1"
      >
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
