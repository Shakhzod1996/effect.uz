import React from "react";
import military from "../../assets/images/military.png";
import play from "../../assets/images/play.png";
import "./VideoNews.css";
import football from "../../assets/images/football.png";
import banner from "../../assets/images/banner.jfif";
import google from "../../assets/images/google.png";
import google1 from "../../assets/images/google1.png";
import clock from "../../assets/images/clock.png";





export default function VideoNews() {
  const five = [1, 2, 3, 4, 5];
  return (
    <div className="video-news">
      <div className="first-container">
        <div className="video-news-header">
          <h3>Video-yangiliklar</h3>
        </div>

        <div className="video-news-flex">
          <div className="left-video-news">
            <img src={military} alt="military" />
            <div className="play-div">
              <img src={play} alt="img" />
            </div>

            <div className="bottom-background">
              <p>
                O‘zbekiston hududida AQSh qo‘shinlari joylashtirilmasligi ma'lum
                qilindi
              </p>
            </div>
          </div>
          <div className="right-video-news">
            {five.map((item) => {
              return (
                <div className="right-video-item" key={item}>
                  <div className="for-img">
                    <img src={football} alt="" />
                    <div className="play-second-div">
                      <img src={play} alt="play" />
                    </div>
                  </div>
                  <div className="small-img-desc">
                    <span><img src={clock} alt="" /> 05.11.2022</span>
                    <h4 className="h44">
                      Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli
                      iqtisodiyot...
                    </h4>
                  </div>
                </div>
              );
            })}

            <button className="bulimga-btn">Bulimga utish</button>
          </div>
        </div>
      </div>
      <div className="for-banner">
        <img src={banner} alt="img" />

        <div className="fo-banner-desc">
            <h1>Har doim xabardor bo’ling!</h1>
            <p><span>Effect.uz</span> mobil ilovasini ko’chirib oling va barcha yangiliklar siz bilan</p>

            <div className="btns-img">
              <button><img src={google} alt="img" /></button>
              <button><img src={google1} alt="img" /></button>
            </div>
        </div>
      </div>
    </div>
  );
}
