import React from "react";
import './Header.css';
import arrDown from '../../assets/images/arr-down.png';
import arrUp from '../../assets/images/arrow-aup.png';
import { useTranslation } from "react-i18next";


export default function Header() {
  const {t} = useTranslation()
  return (
    <div className="header">
      <div className="input-div">
        <input type="search" placeholder={t("Поиск")} className="input-search" />
        <button>
          <i className="bx bx-search" />
        </button>
      </div>

      <div className="carrency-container">
        <div>
          USD = 108917,93
          <img src={arrDown} alt="img" />
        </div>

        <div>
          EUR = 12651,93
          <img src={arrDown} alt="img" />
        </div>

        <div>
          RUB = 190,93
          <img src={arrUp} alt="img" />
        </div>
      </div>
    </div>
  );
}
