import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import "./App.css";
import FotoNews from "./components/FotoNews/FotoNews";
import VideoNews from "./components/VideoNews/VideoNews";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import API from "./API/API";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Ruknlar from "./components/Ruknlar/Ruknlar";

export default function App() {

//   const [data, setData] = useState()
// const response = API.category()
//   useEffect(() => {
//     setData(response.data)
//   }, [])

//   console.log(data);

  return (
    <>
      <div className="main_flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/yangiliklar" element={<News />} />
          <Route path="/ruknlar" element={<Ruknlar />} />


        </Routes>

        <SideBar />
      </div>
        <FotoNews />
        <VideoNews />

      <Footer />
    </>
  );
}
