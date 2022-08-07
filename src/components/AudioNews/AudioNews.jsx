import React, { useEffect, useRef, useState } from "react";
import Header from "../Header/Header";
import "./AudioNews.css";
import { useTranslation } from "react-i18next";
import AudioItem from "./AudioItem/AudioItem";
import API from "../../API/API";
import ReactAudioPlayer from "react-audio-player";

export default function AudioNews() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [audioOne, setAudioOne] = useState([]);
  const [loading, setLoading] = useState(false);

  const audioRef = useRef(null)

  const fetchData = async () => {
    try {
      setLoading(false)
      const audio = await API.audio();
      setData(audio.data.items);
      const audOne = await API.audioOne(1);
      setAudioOne(audOne.data);

      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const clickedSong = async (id) => {
    const audOne = await API.audioOne(id);
    setAudioOne(audOne.data);
    console.log(audioRef.current);
    audioRef.current.focus();
  };
  useEffect(() => {
    fetchData();
  }, []);

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
        <h2>{t("Аудио новости")}</h2>
      </div>
      <div className="audio-main">
        <h2>{audioOne.title_uz}</h2>
        <input type="text" ref={audioRef} className="audio-input" />
        <ReactAudioPlayer
        
          className="audio-player"
          src={audioOne.voice}
          autoPlay
          controls
        />
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
          <AudioItem clickedSong={clickedSong} key={item.id} item={item} />
        ))}
        <div className="yana-yuklash-div">
          <button>{t("Перезагрузить")}</button>
        </div>
      </div>
    </div>
  );
}
