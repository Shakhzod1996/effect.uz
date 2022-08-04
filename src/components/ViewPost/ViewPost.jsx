import React, { useEffect, useRef, useState } from "react";
import "./ViewPost.css";
import { useLocation, useParams, Link, Route, Routes } from "react-router-dom";
import API from "../../API/API";
import Header from "../Header/Header";
import phone from "../../assets/images/phone.jfif";
import { useTranslation } from "react-i18next";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import arrCircle from "../../assets/images/arr-circle.png";
import {} from "react-router-dom";
import PostComment from "./PostComment";
import parse from "html-react-parser";
import Muharrir from "../Muharrir/Muharrir";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewPost({ setHideSide }) {
  const [news, setNews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [userValue, setUSerValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [star, setStar] = useState(0);

  const copyRef = useRef(null);
  const location = useLocation();
  const { t } = useTranslation();

  const { id } = useParams();

  const commentObj = {
    new_id: id,
    description: inputValue,
    userAgent: userValue,
  };

  const stars = {
    new_id: id,
    star: star,
  };

  const addCommentClicked = async () => {
    setInputValue("");
    setUSerValue("");
    return await API.comment(commentObj);
  };

  const addStar = async () => {
    return await API.star(stars);
  };

  const fetchData = async () => {
    try {
      setLoading(false);
      const newsRest = await API.newItem(id);

      setNews(newsRest.data);
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const clickedForCopy = () => {
    return (
      navigator.clipboard.writeText(copyRef.current.innerText),
      toast.info("Nusxalandi", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    )
  }

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
    <>
      <div className="viewPost">
        <Header />
        <h2 className="each-header">{news.title_uz}</h2>
        <div className="top-btn-flex">
          <button>{news.provence_id}</button>
          <button>{news.category_id}</button>
        </div>

        <h3 className="bottom-header1">{news.title_uz}</h3>

        <img src={news.default_img} alt="img" className="phone-img" />
        <p className="main-desc">{parse(news.description_uz)}</p>

        <p className="main-desc">{parse(news.description_uz)}</p>

        <div className="baholash-div">
          <Link to={`/yangiliklar/${id}/muharrir/${news.user_id}`} className="news-a">
            <h3 onClick={() => setHideSide(true)}>{news.user}</h3>
          </Link>

          <Routes>
            <Route
              path={`/muharrir/${news.user_id}`}
              element={<Muharrir setHideSide={setHideSide} />}
            />
          </Routes>

          <div className="baho-flex">
            <div>
              <p>{t("Оцените новость")}</p>

              <Stack spacing={1}>
                <Rating
                  name="half-rating"
                  defaultValue={0}
                  precision={1}
                  value={star}
                  onChange={(event, newValue) => setStar(newValue)}
                  onClick={() => addStar()}
                />
              </Stack>
            </div>

            <div className="second-rating">
              <div className="for-m-right">
                <p>
                  {t("Oценивается чел")}: <span>123</span>
                </p>
              </div>

              <div>
                <p>
                  {t("Рейтинг")}:{" "}
                  <span>{news.stars === null ? "0" : news.stars}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="maqola-ulash-flex">
            <div className="maqola-ulash-left">
              <p>{t("Ссылка на статью")}</p>
              <div className="svg-images">
                <svg
                  width={35}
                  height={35}
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4998 32.0834C9.44546 32.0834 2.9165 25.5544 2.9165 17.5C2.9165 9.44565 9.44546 2.91669 17.4998 2.91669C25.5542 2.91669 32.0832 9.44565 32.0832 17.5C32.0832 25.5544 25.5542 32.0834 17.4998 32.0834ZM12.9644 19.2063L12.9834 19.1961L14.2521 23.3815C14.4155 23.835 14.64 23.9167 14.9128 23.8788C15.1869 23.8423 15.3313 23.695 15.5107 23.5229L17.2432 21.8488L20.9619 24.6021C21.6415 24.9769 22.13 24.7829 22.2992 23.9721L24.7157 12.565C24.9825 11.5034 24.5159 11.0775 23.6919 11.4159L9.49796 16.8992C8.52963 17.2871 8.53546 17.8296 9.32296 18.0702L12.9644 19.2077V19.2063Z"
                    fill="#314FFC"
                    fillOpacity="0.96"
                  />
                </svg>

                <svg
                  width={35}
                  height={35}
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4998 2.91669C9.44546 2.91669 2.9165 9.44565 2.9165 17.5C2.9165 24.7786 8.24963 30.8117 15.2219 31.9069V21.7146H11.5178V17.5H15.2219V14.2873C15.2219 10.6327 17.3978 8.6144 20.73 8.6144C22.3255 8.6144 23.9938 8.89877 23.9938 8.89877V12.4863H22.1563C20.3436 12.4863 19.7792 13.6106 19.7792 14.7642V17.5H23.8232L23.1771 21.7146H19.7792V31.9069C26.75 30.8131 32.0832 24.7771 32.0832 17.5C32.0832 9.44565 25.5542 2.91669 17.4998 2.91669Z"
                    fill="#000CFF"
                  />
                </svg>

                <svg
                  width={35}
                  height={35}
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.3194 8.24835C31.2061 8.74082 30.0254 9.06425 28.8165 9.20793C30.0908 8.44586 31.0444 7.24649 31.4999 5.83335C30.304 6.54501 28.993 7.04376 27.6265 7.31356C26.7087 6.33148 25.4921 5.68017 24.1658 5.46087C22.8396 5.24157 21.4781 5.46656 20.293 6.10088C19.1078 6.7352 18.1654 7.7433 17.6123 8.96846C17.0592 10.1936 16.9264 11.5672 17.2344 12.8756C14.8094 12.7541 12.437 12.1239 10.2713 11.026C8.10563 9.92806 6.19505 8.38696 4.66361 6.50272C4.12154 7.4338 3.83667 8.49222 3.8382 9.5696C3.8382 11.6842 4.91445 13.5523 6.5507 14.6461C5.58238 14.6156 4.63537 14.3541 3.78861 13.8833V13.9592C3.78891 15.3675 4.27624 16.7324 5.16797 17.8224C6.05971 18.9124 7.30098 19.6605 8.68132 19.9398C7.78243 20.1834 6.83989 20.2193 5.92507 20.0448C6.31425 21.257 7.07279 22.3172 8.09448 23.0768C9.11616 23.8365 10.3498 24.2576 11.6228 24.2813C10.3576 25.2749 8.90908 26.0094 7.3599 26.4428C5.81072 26.8762 4.1913 27 2.59424 26.8071C5.38213 28.6 8.6275 29.5519 11.9422 29.5488C23.1611 29.5488 29.2963 20.2548 29.2963 12.1946C29.2963 11.9321 29.289 11.6667 29.2774 11.4071C30.4715 10.544 31.5022 9.47483 32.3209 8.24981L32.3194 8.24835Z"
                    fill="#09B9FF"
                  />
                </svg>
              </div>
            </div>
            <div className="maqola-ulash-right">
              <p ref={copyRef}>{`https://effect.uz/${location.pathname}`}</p>
              <button onClick={clickedForCopy} className="readnews__share-btn">
                {t("Копировать")}
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>

        <div className="izoh-qoldirish-div">
          <div className="izoh-qoldirish-header-flex">
            <h3>{t("Оставить комментарий")}</h3>
            <div></div>
          </div>

          <div className="izoh-qoldirish-text">
            <input
              type="text"
              className="input_comment"
              placeholder="Enter your name"
              value={userValue}
              onChange={(e) => setUSerValue(e.target.value)}
            />
            <textarea
              name="text"
              placeholder="Enter your comment here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => addCommentClicked(news.id)}
            className="post-btn"
          >
            Post Comment
          </button>
        </div>
        <div className="all-comments">
          <div className="comment-header-flex">
            <h3>Barcha Izohlar ({news.comment_count})</h3>
            <img src={arrCircle} alt="img" />
          </div>

          <div
            className={`izoh-container ${
              news.comments.length > 10 ? "scrolled" : ""
            }`}
          >
            {news.comments.reverse().map((item) => (
              <PostComment item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
