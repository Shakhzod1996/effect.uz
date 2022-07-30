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
import ViewPost from "./components/NiewPost/ViewPost";
import ScrollToTop from "./components/ScrollToTop";
import AudioNews from "./components/AudioNews/AudioNews";
import API from "./API/API";
import Muharrir from "./components/Muharrir/Muharrir";



export default function App() {
    const location = useLocation()
  const [posts, setPosts] = useState([]);

  const[hideSide, setHideSide] = useState(false);

  const fetchData = async () => {
    const data = await API.category()
    setPosts(data)
  }

useState(() => {
  fetchData()

}, [])



  return (
    <>
      <div className="main_flex">
        <Navbar setHideSide={setHideSide}  />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/yangiliklar" element={<News />} />
          <Route path="/ruknlar" element={<Ruknlar />} />
          <Route path="/audiolar" element={<AudioNews />} />

          <Route path="/yangiliklar/:id" element={<ViewPost setHideSide={setHideSide} hideSide={hideSide} />} />
          <Route path="yangiliklar/muharrir" element={<Muharrir setHideSide={setHideSide} />} />

        </Routes>

        <SideBar hideSide={hideSide} setHideSide={setHideSide} />
      </div>
      <FotoNews />
      <VideoNews />

      <Footer />
    </>
  );
}
