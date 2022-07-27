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
import {lightTheme,darkTheme, GlobalStyle} from './themes'
import styled, { ThemeProvider,  } from "styled-components";

const StyledApp = styled.div `
  color: ${(props) => props.theme.fontColor};
`;

export default function App() {
  const [data, setData] = useState([]);
  const [provence, setProvence] = useState([]);
  const [config, setConfig] = useState([]);
  const [newItem, setNewItem] = useState([]);

  const [theme, setTheme] = useState("light");

  const themeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const fetchData = async () => {
    try {
      const category = await API.category();
      const provence = await API.provence();
      const config = await API.config();
      const newItem = await API.newItem(8);
      

      setData(category.data);
      setProvence(provence.data);
      setConfig(config.data);
      setNews(news.data);
      setNewItem(newItem.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <>
        <StyledApp className="main_flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/yangiliklar" element={<News />} />
            <Route path="/ruknlar" element={<Ruknlar />} />
          </Routes>

          <SideBar />
        </StyledApp>
        <FotoNews />
        <VideoNews />

        <Footer />
      </>
    </ThemeProvider>
  );
}




