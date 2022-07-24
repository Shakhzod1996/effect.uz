import React, { useState } from "react";
import Header from "../Header/Header";
import "./News.css";
import { Swiper, SwiperSlide } from "swiper/react";
import pub from "../../assets/images/pub.jfif";
import mes from "../../assets/images/mess.png";
import clock from "../../assets/images/clock.png";
import budil from "../../assets/images/budil.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";

export default function News() {

  const [status, setStatus] = useState(false)
  const four = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];

  return (
    <div className="news">
      <Header />
      <div className="last-news">
        <h2 className="last-news-title">Yangiliklar Lentisi</h2>

        <div className="news-bot-main">
          <div className="date-div">
            <div className="blue-line"></div>
            <p>22.07.2022</p>
          </div>

          <div className="news-cards-flex">
            <div className="right-news-container">
              {four.map((item) => {
                return (
                  <div className="big-arr-div" key={item}>
                    <div className="right-news-item" >
                      <img src={pub} alt="pub" />
                      <div className="right-news-item-inside">
                        <h4>
                          Card hover bo’lganda title color o’zgarishi va card
                          box-shadow ham o’zgarmoqda. soat va icon ham
                          o’zgarmoqda
                        </h4>

                        <div>
                          <p>#Texnologiya</p>
                          <p>
                            <img src={mes} alt="img" /> 12 izoh
                          </p>
                        </div>
                      </div>

                      <div className="clock-absolute">
                        <p>19:30</p>
                        <img src={clock} alt="clock" />
                      </div>
                    </div>
                  </div>
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
                  <div key={item} className="big-arr-div">
                    <div className="right-news-item" >
                      <img src={pub} alt="pub" />
                      <div className="right-news-item-inside">
                        <h4>
                          Card hover bo’lganda title color o’zgarishi va card
                          box-shadow ham o’zgarmoqda. soat va icon ham
                          o’zgarmoqda
                        </h4>

                        <div>
                          <p>#Texnologiya</p>
                          <p>
                            <img src={mes} alt="img" /> 12 izoh
                          </p>
                        </div>
                      </div>
                      <div className="clock-absolute">
                        <p>19:30</p>
                        <img src={clock} alt="clock" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="btn-container">
            <button>Yana yuklash</button>
          </div>
        </div>
      </div>
    </div>
  );
}
