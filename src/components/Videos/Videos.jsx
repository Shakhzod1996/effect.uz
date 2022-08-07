import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import VideosEach from "./VideosEach";
import API from "../../API/API";
import ReactPlayer from 'react-player'

export default function Videos() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const fetchData = async () => {
    try {
      setLoading(false);
      const videos = await API.videos();
      setData(videos.data);

      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const videoClicked = async () => {
    console.log("done");
  }

  useEffect(() => {
    fetchData();
  }, []);



  console.log(data);

  if (!loading) {
    return (
      <div className="loading-div">
        <i className="bx bx-loader"></i>
      </div>
    );
  }

  return (
    <div className="audio-news">
      <Header />

      <div className="audio-header">
        <h2>{t("Видео новости")}</h2>
      </div>

      <div className="video-container">

      <ReactPlayer className="video-play" url={`https://www.youtube.com/watch?v=Lf5R6oHddPo`} />
      </div>

      {/* <div className="audio-player-div">
        <h3>
          Leak: Samsung to announce the Z Fold 3 and Galaxy Watch 4 in August
        </h3>

        <div className="player-flex">
          <div>
            <button className="small-arr-btn">
              <i className="bx bx-chevron-left"></i>
            </button>
            <button className="big-play-center">
              <i className="bx bx-play"></i>
            </button>
            <button className="small-arr-btn">
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>

          <div className="player-range-div">
            <p>01:25 / 03:38</p>
            <input type="range" className="long-range" />
            <input type="range" className="short-range" />
          </div>
        </div>
      </div> */}

      <div className="audio-container">
        {data.map((item) => (
          <VideosEach key={item.id} item={item} videoClicked={videoClicked} />
        ))}
        {/* <div className="yana-yuklash-div">
          <button>{t("Перезагрузить")}</button>
        </div> */}
      </div>
    </div>
  );
}
