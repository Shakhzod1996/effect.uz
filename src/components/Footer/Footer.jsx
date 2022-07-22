import React from "react";
import "./Footer.css";
import siteLogo from "../../assets/images/SiteLogo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={siteLogo} alt="img" />
        <div className="footer-inside-flex">
          <div className="left-footer">
            <ul className="left-footer-ul">
              <div>
                <h4>Foydali sahifalar</h4>
                <li>Yangiliklar lentasi</li>
                <li>Foto-yangiliklar</li>
                <li>Video-yangiliklar</li>
                <li>Content</li>
                <li>Integrations</li>
              </div>
              <div>
                <h4>Ruknlar</h4>
                <li>Siyosat</li>
                <li>Texnologiya</li>
                <li>Sport</li>
                <li>Website Builder</li>
              </div>
              <div>
                <h4>Hududlar</h4>
                <li>Toshkent</li>
                <li>Samarqand</li>
                <li>Qashqadaryo</li>
                <li>Hosting</li>
                <li>Developers</li>
                <li>Support</li>
              </div>
              <div>
                <h4>Biz haqimizda</h4>
                <li>About Us</li>
                <li>Careers</li>
                <li>Ko’p so’raladigan savollar</li>
                <li>Jamoa</li>
                <li>Bo’sh ish o’rni</li>
              </div>
            </ul>

            <p>
              «EFFECT.UZ» интернет-нашри 2019 йилнинг 1 ноябрь куни электрон ОAВ
              сифатида Ўзбекистон Республикаси Президенти Aдминстрацияси
              ҳузуридаги Aхборот ва оммавий коммуникациялар агентлигида
              рўйхатдан ўтказилган. Гувоҳнома рақами: 1323. Муассис:
              «EFFECTUZBEK» МЧЖ Сайт раҳбари: Aкмалхон Эшонхонов Электрон
              манзил: www.effect.uz@gmail.com Таҳририят манзили: 100016, Тошкент
              шаҳри, Яшнобод тумани, Маҳтумқули кўчаси 26-уй. EFFECT.UZ сайтида
              эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа
              шаклларда фойдаланиш фақат таҳририят раҳбариятининг ёзма розилиги
              билан амалга оширилади.{" "}
            </p>
          </div>
          <div className="right-footer">
            <h3>Contact Us</h3>
            <div>
              <i className="bx bx-location-plus"></i>
              <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
            </div>

            <div>
              <i className="bx bx-message-square"></i>
              <p>support@figma.com</p>
            </div>

            <button className="sub">Subscribe</button>

            <h3 className="follow-header">Follow us</h3>
            <div className="links-flex">
                <i className="bx bxl-facebook" />
                <i className="bx bxl-telegram" />
                <i className="bx bxl-instagram" />
                <i className="bx bxl-figma" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
