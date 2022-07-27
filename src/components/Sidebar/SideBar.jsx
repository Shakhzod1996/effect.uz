import React, { useEffect, useState } from "react";
import "./sidebar.css";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import sunBig from "../../assets/images/sun-big.png";
import feather from "../../assets/images/feather.png";
import file from "../../assets/images/file-text.png";
import gift from '../../assets/images/gift.png'
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import SideItem from "./SideItem/SideItem";



export default function SideBar() {
  const eight = [1, 2, 3, 4, 5, 6, 7, 8];
  const [lang, setLang] = useState("")
  const {t} = useTranslation()

  

  useEffect(() => {
    switch(lang) {
      case "uz":
        i18n.changeLanguage(lang)
        case "ru":
        i18n.changeLanguage(lang)

    }
  }, [lang])
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
          <select onChange={(e)=> setLang(e.target.value)}>
            <option value="uz">O'zbek</option>
            <option value="ru">Russ</option>
          </select>
        </div>
      </div>

      <div className="boxes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="wether-div-1">
        <div className="weather-header-flex">
          <p>Qashqadaryo, Qarshi</p>
          <div className="btns-flex-weather">
            <button>
              <i className="bx bxs-chevron-left"></i>
            </button>
            <button>
              <i className="bx bxs-chevron-right"></i>
            </button>
          </div>
        </div>
        <hr className="weather-hr" />
        <div>
          <div className="quyow-div">
            <p>Quyoshli</p>
            <p className="big-p">31'C / 25'C</p>
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
        {eight.map((item) => {
          return (
            <SideItem key={item} />
          );
        })}
      </div>

      <div className="premium1">
        <div>
          <img src={gift} alt="gift" />
          <p>Subscribe to Premium</p>
        </div>

        <div className="last-upgrade">
          <p>$8 <span>/m</span></p>
          <button>Upgrade</button>
        </div>
      </div>
    </div>
  );
}
