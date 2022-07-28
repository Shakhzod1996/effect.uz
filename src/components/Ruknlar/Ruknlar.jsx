import React from "react";
import "./Ruknlar.css";
import Header from "../Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/big-img.jfif";
import tex from "../../assets/images/tex.png";
import bugun from "../../assets/images/bugun.png";
import insta from "../../assets/images/insta.png";
import gift from "../../assets/images/gift.png";
import pab from "../../assets/images/pub.jfif";
import cart from "../../assets/images/cart.png";
import pub from "../../assets/images/pub.jfif";
import mes from "../../assets/images/mess.png";
import clock from "../../assets/images/clock.png";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export default function () {
  const { t } = useTranslation();
  const four = [1, 2, 3, 4];
  const six = [1, 2, 3, 4, 5, 6];
  return (
    <div className="ruknlar">
      <Header />

      <div className="last-news">
        <h2 className="last-news-title">{t("Политика")}</h2>
        

        <div className="img-container-flex">
            <div className="left-img-con">
              <div className="left-img-container-one">
              <img src={img1} alt="img" />
              </div>

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
                  <div className="right-img-items" key={item}>
                    <div>
                      <p>
                        <img src={cart} alt="" />
                        <span>11:45 | 13.07.2022</span>{" "}
                      </p>
                      <h4>
                        Card hover bo’lganda box-shadow o’zgarishi va color
                      </h4>
                    </div>
                    <img src={insta} alt="img" />
                  </div>
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
                  <div className="big-arr-div" key={item}>
                    <div className="right-news-item">
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
            <button>{t("Перезагрузить")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
