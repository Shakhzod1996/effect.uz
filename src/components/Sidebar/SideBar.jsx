import React from "react";
import "./sidebar.css";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import sunBig from "../../assets/images/sun-big.png";
import feather from "../../assets/images/feather.png";
import file from "../../assets/images/file-text.png";

export default function SideBar() {
  const eight = [1, 2, 3, 4, 5, 6, 7, 8];
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
          <select>
            <option value="uzb">O'zbek</option>
            <option value="rus">Russ</option>
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
          <p>Mobil muhbirga aylaning!</p>
        </div>

        <div className="muhmir-desc">
          <p>Masofadan bizning muhbirga aylaning !</p>
          <button>Batafsil</button>
        </div>
      </div>

      <div className="kup-uqilgan">
        <div className="kup-uqilgan-header">
          <img src={file} alt="img" />
          <p>Eng kup uqilgan</p>
        </div>
        {eight.map((item) => {
          return (
            <div className="kup-uqilgan-item" key={item}>
              <span>11:45 | 13.07.2022</span>
              <p>
                The price of petrol remained unchanged on July 6 after reaching
                a new record high on.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
