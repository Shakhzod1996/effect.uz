import React from "react";
import "./navbar.css";
import logo from "../../assets/images/Group 121.svg";
import { NavLink } from "react-router-dom";
import menu from "../../assets/images/menu.svg";
import home from "../../assets/images/home.svg";
import frame from "../../assets/images/Frame.svg";
import audio from "../../assets/images/lenta.svg";
import video from "../../assets/images/video.svg";
import globe from "../../assets/images/globe.svg";



export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={logo} alt="" />
      </div>

      <ul className="navbar-ul">
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/"
        >
          <li>
            <img src={home} alt="img" />
            <p>Bosh Sahifa</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/a"
        >
          <li>
            {" "}
            <img src={menu} alt="img" /> <p>Yangiliklar Lentasi</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/b"
        >
          <li>
            <img src={frame} alt="img" />
            <p>Ruknlar</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/c"
        >
          <li>
            <img src={audio} alt="" />
            <p>Audio Xabarlar</p>
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/d"
        >
          <li><img src={video} alt="video" /><p>Video Xabarlar</p></li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-nav" : undefined)}
          to="/e"
        >
          <li><img src={globe} alt="img" /><p>Hududlar</p>
          
          </li>
          <div className="globe-absolute">
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
            <p><span></span>Samarqand</p>
          </div>
        </NavLink>
      </ul>
    </div>
  );
}
