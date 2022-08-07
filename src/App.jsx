import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import "./App.css";
import FotoNews from "./components/FotoNews/FotoNews";
import VideoNews from "./components/VideoNews/VideoNews";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import News from "./components/News/News";
import Ruknlar from "./components/Ruknlar/Ruknlar";
import ViewPost from "./components/ViewPost/ViewPost";
import ScrollToTop from "./components/ScrollToTop";
import AudioNews from "./components/AudioNews/AudioNews";
import API from "./API/API";
import Muharrir from "./components/Muharrir/Muharrir";
import Videos from "./components/Videos/Videos";
import Advertisement from "./components/Advertisement/Advertisement";
import Takliflar from "./components/Takliflar/Takliflar";

export default function App() {
  const [hideSide, setHideSide] = useState(false);

  return (
    <>
      <div className="main_flex">
        <Navbar setHideSide={setHideSide} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/yangiliklar" element={<News />} />
          <Route path="/ruknlar" element={<Ruknlar />} />
          <Route path="/audiolar" element={<AudioNews />} />
          <Route path="/videolar" element={<Videos />} />
          <Route path="/reklama-murojat" element={<Advertisement />} />
          <Route path="/takliflar" element={<Takliflar />} />



          <Route
            path="/yangiliklar/:id"
            element={<ViewPost setHideSide={setHideSide} hideSide={hideSide} />}
          />

          <Route
            path={`/muharrir/:user_id`}
            element={<Muharrir setHideSide={setHideSide} />}
          />
        </Routes>

        <SideBar hideSide={hideSide} setHideSide={setHideSide} />
      </div>
      {/* <FotoNews /> */}
      <VideoNews />

      <Footer />
    </>
  );
}
