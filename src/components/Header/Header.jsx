import React, { useEffect, useState } from "react";
import "./Header.css";
import arrDown from "../../assets/images/arr-down.png";
import arrUp from "../../assets/images/arrow-aup.png";
import { useTranslation } from "react-i18next";
import API from "../../API/API";


export default function Header() {

  const [currency, setCurrency] = useState([]);
  const [currencyEUR, setCurrencyEUR] = useState([]);
  const [currencyRUB, setCurrencyRUB] = useState([]);


  const fetchData = async () => {
    try {
      const currency = await API.currency_USD();
      const currencyEUR = await API.currency_EUR();
      const currencyRUB = await API.currency_RUB();


      setCurrency(currency.data.results);
      setCurrencyEUR(currencyEUR.data.results)
      setCurrencyRUB(currencyRUB.data.results)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="input-div">
        <input
          type="search"
          placeholder={t("Поиск")}
          className="input-search"
        />
        <button>
          <i className="bx bx-search" />
        </button>
      </div>

      <div className="carrency-container">
        <div>
          USD = {currency.UZS}
          <img src={arrDown} alt="img" />
        </div>

        <div>
          EUR = {currencyEUR.UZS}
          <img src={arrDown} alt="img" />
        </div>

        <div>
          RUB = {currencyRUB.UZS}
          <img src={arrUp} alt="img" />
        </div>
      </div>
    </div>
  );
}
