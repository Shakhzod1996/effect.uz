import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import sunBig from "../../assets/images/sun-big.png";
import feather from "../../assets/images/feather.png";
import file from "../../assets/images/file-text.png";
import gift from "../../assets/images/gift.png";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import SideItem from "./SideItem/SideItem";
import API from "../../API/API";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export default function SideBar({hideSide, setHideSide}) {
  const location = useLocation()
  const regions = [
    { id: 1, name: "Samarqand", temp: 21 },
    { id: 2, name: "Qarshi", temp: 22 },
    { id: 3, name: "Toshkent", temp: 23 },
    { id: 4, name: "Buxoro", temp: 24 },
    { id: 5, name: "Navoiy", temp: 25 },
    { id: 6, name: "Nukus", temp: 26 },
    { id: 7, name: "Sirdaryo", temp: 27 },
    { id: 8, name: "Urgut", temp: 28 },

    { id: 9, name: "Juma", temp: 29 },
    { id: 10, name: "Yaman", temp: 31 },
  ];
  const [index, setIndex] = useState(0);
  const { name, temp } = regions[index];
  const [lang, setLang] = useState("");
  const [mostRead, setMostRead] = useState([]);

  const [weather, setWeather] = useState([]);
  const { t } = useTranslation();

  const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=2a2fbcce83edbff63a879e8e1e65b62b`;

  const weatherHandler = async () => {
    const response = await axios.get(WEATHER_URL);
    setWeather(response.data);
  };

  const fetchData = async () => {
    const data = await API.mostRead()
    setMostRead(data.data);
  };

  useEffect(() => {
    weatherHandler();
    fetchData();
  }, []);

  const leftClickedHandler = () => {
    index < regions.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const rightClickedHandler = () => {
    index < 1 ? setIndex(regions.length - 1) : setIndex(index - 1);
  };

  useEffect(() => {
    switch (lang) {
      case "uz":
        i18n.changeLanguage(lang);
      case "ru":
        i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <div className="sidebar">
      <div className="moon-div-flex">
        <div className="moon-left">
          <button>
            <img src={sun} alt="img" />
          </button>
          <button>
            <img src={moon} alt="" />
          </button>
        </div>

        <div className="moon-right">
          <select onChange={(e) => setLang(e.target.value)}>
            <option value="uz">O'zbek</option>
            <option value="ru">Russ</option>
          </select>
        </div>
      </div>

      <div className="boxes">
        <div className="div01">
          <svg
            width={35}
            height={35}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4998 32.0834C9.44546 32.0834 2.9165 25.5544 2.9165 17.5C2.9165 9.44565 9.44546 2.91669 17.4998 2.91669C25.5542 2.91669 32.0832 9.44565 32.0832 17.5C32.0832 25.5544 25.5542 32.0834 17.4998 32.0834ZM12.9644 19.2063L12.9834 19.1961L14.2521 23.3815C14.4155 23.835 14.64 23.9167 14.9128 23.8788C15.1869 23.8423 15.3313 23.695 15.5107 23.5229L17.2432 21.8488L20.9619 24.6021C21.6415 24.9769 22.13 24.7829 22.2992 23.9721L24.7157 12.565C24.9825 11.5034 24.5159 11.0775 23.6919 11.4159L9.49796 16.8992C8.52963 17.2871 8.53546 17.8296 9.32296 18.0702L12.9644 19.2077V19.2063Z"
              fill="#314FFC"
              fillOpacity="0.96"
            />
          </svg>
        </div>
        <div>
          <svg
            width={35}
            height={35}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4998 2.91669C9.44546 2.91669 2.9165 9.44565 2.9165 17.5C2.9165 24.7786 8.24963 30.8117 15.2219 31.9069V21.7146H11.5178V17.5H15.2219V14.2873C15.2219 10.6327 17.3978 8.6144 20.73 8.6144C22.3255 8.6144 23.9938 8.89877 23.9938 8.89877V12.4863H22.1563C20.3436 12.4863 19.7792 13.6106 19.7792 14.7642V17.5H23.8232L23.1771 21.7146H19.7792V31.9069C26.75 30.8131 32.0832 24.7771 32.0832 17.5C32.0832 9.44565 25.5542 2.91669 17.4998 2.91669Z"
              fill="#000CFF"
            />
          </svg>
        </div>
        <div>
          <svg
            width={35}
            height={35}
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.3194 8.24835C31.2061 8.74082 30.0254 9.06425 28.8165 9.20793C30.0908 8.44586 31.0444 7.24649 31.4999 5.83335C30.304 6.54501 28.993 7.04376 27.6265 7.31356C26.7087 6.33148 25.4921 5.68017 24.1658 5.46087C22.8396 5.24157 21.4781 5.46656 20.293 6.10088C19.1078 6.7352 18.1654 7.7433 17.6123 8.96846C17.0592 10.1936 16.9264 11.5672 17.2344 12.8756C14.8094 12.7541 12.437 12.1239 10.2713 11.026C8.10563 9.92806 6.19505 8.38696 4.66361 6.50272C4.12154 7.4338 3.83667 8.49222 3.8382 9.5696C3.8382 11.6842 4.91445 13.5523 6.5507 14.6461C5.58238 14.6156 4.63537 14.3541 3.78861 13.8833V13.9592C3.78891 15.3675 4.27624 16.7324 5.16797 17.8224C6.05971 18.9124 7.30098 19.6605 8.68132 19.9398C7.78243 20.1834 6.83989 20.2193 5.92507 20.0448C6.31425 21.257 7.07279 22.3172 8.09448 23.0768C9.11616 23.8365 10.3498 24.2576 11.6228 24.2813C10.3576 25.2749 8.90908 26.0094 7.3599 26.4428C5.81072 26.8762 4.1913 27 2.59424 26.8071C5.38213 28.6 8.6275 29.5519 11.9422 29.5488C23.1611 29.5488 29.2963 20.2548 29.2963 12.1946C29.2963 11.9321 29.289 11.6667 29.2774 11.4071C30.4715 10.544 31.5022 9.47483 32.3209 8.24981L32.3194 8.24835Z"
              fill="#09B9FF"
            />
          </svg>
        </div>
        <div></div>
      </div>
    <div className={`${hideSide? "dis-none" : null}`}>
    <div className="wether-div-1">
        <div className="weather-header-flex">
          <p>Uzbekistan / {name}</p>
          <div className="btns-flex-weather">
            <button onClick={leftClickedHandler}>
              <i className="bx bxs-chevron-left"></i>
            </button>
            <button onClick={rightClickedHandler}>
              <i className="bx bxs-chevron-right"></i>
            </button>
          </div>
        </div>
        <hr className="weather-hr" />
        <div className="div-container-slider">
          <div className="quyow-div">
            <p>{name}</p>
            <p className="big-p">{temp}'C</p>
          </div>
          <img src={sunBig} alt="sun" />
        </div>
      </div>

      <div className="mobile-muhbir">
        <div className="mobile-muhbir-header">
          <img src={feather} alt="img" />
          <p>{t("Станьте мобильным репортером!")}</p>
        </div>

        <div className="muhmir-desc">
          <p>{t("Станьте нашим корреспондентом удаленно")}</p>
          <button>{t("Подробный")}</button>
        </div>
      </div>

      <div className="kup-uqilgan">
        <div className="kup-uqilgan-header">
          <img src={file} alt="img" />
          <p>{t("Самые читаемые")}</p>
        </div>
        <div className="sidebar-content">
          {mostRead.map((item) => {
            return (
              <Link
                className="news-a"
                key={item.id}
                to={`yangiliklar/${item.id}`}
              >
                <SideItem item={item} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="premium1">
        <div>
          <img src={gift} alt="gift" />
          <p>Subscribe to Premium</p>
        </div>

        <div className="last-upgrade">
          <p>
            $8 <span>/m</span>
          </p>
          <button>Upgrade</button>
        </div>
      </div>
    </div>
 
    </div>
  );
}
