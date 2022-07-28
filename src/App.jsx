import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import "./App.css";
import FotoNews from "./components/FotoNews/FotoNews";
import VideoNews from "./components/VideoNews/VideoNews";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Ruknlar from "./components/Ruknlar/Ruknlar";
import ViewPost from "./components/NiewPost/ViewPost";
import ScrollToTop from "./components/ScrollToTop";
import AudioNews from "./components/AudioNews/AudioNews";



export default function App() {

  return (
    <>
      <div className="main_flex">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/yangiliklar" element={<News />} />
          <Route path="/ruknlar" element={<Ruknlar />} />
          <Route path="/audiolar" element={<AudioNews />} />

          <Route path="/news/:id" element={<ViewPost />} />
        </Routes>

        <SideBar />
      </div>
      <FotoNews />
      <VideoNews />

      <Footer />
    </>
  );
}
