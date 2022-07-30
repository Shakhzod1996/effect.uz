import React, { useEffect, useState } from "react";
import "./ViewPost.css";
import { useLocation } from "react-router-dom";
import API from "../../API/API";
import Header from "../Header/Header";
import phone from "../../assets/images/phone.jfif";
import { useTranslation } from "react-i18next";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import arrCircle from "../../assets/images/arr-circle.png";
import { Link } from "react-router-dom";

export default function ViewPost({ setHideSide }) {
  const [news, setNews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const { t } = useTranslation();

  const commentObj = {
    id: new Date(),
    description: inputValue,
    userAgent: "Shaxzod Muradov",
  };

  const addCommentClicked = async () => {
    await API.comment(commentObj);
  };

  const fetchData = async () => {
    try {
      const newsRest = await API.news();

      setNews(newsRest.data.items);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();

  }, []);

  return (
    <>
      {news.map((item) => {
        if (item.id === +location.pathname.split("/").at(-1)) {
          return (
            <div key={item.id} className="viewPost">
              <Header />
              <h2 className="each-header">{item.title_uz}</h2>
              <div className="top-btn-flex">
                <button>Tech</button>
                <button>Mobile</button>
              </div>

              <h3 className="bottom-header1">
                Samsung's next Unpacked event reportedly lands August 11
              </h3>

              <img src={phone} alt="img" className="phone-img" />
              <p className="main-desc">{item.description_uz}</p>

              <span className="top-span-view">
                According to the report, Samsung will be launching five devices
                at the event:
              </span>

              <div className="category-view-block">
                <div className="category-item-view">
                  <div></div>
                  <p>Galaxy Z Fold 3</p>
                </div>
                <div className="category-item-view">
                  <div></div>
                  <p>Galaxy Z Flip 3</p>
                </div>
                <div className="category-item-view">
                  <div></div>
                  <p>Galaxy Watch 4</p>
                </div>
                <div className="category-item-view">
                  <div></div>
                  <p>Galaxy Watch 4 Active </p>
                </div>
                <div className="category-item-view">
                  <div></div>
                  <p>Galaxy Buds 2</p>
                </div>
              </div>

              <p className="main-desc">{item.description_uz.slice(0, 210)}</p>
              <p className="main-desc">{item.description_uz.slice(210, 400)}</p>

              <div className="baholash-div">
                <Link to={`/yangiliklar/muharrir`} className="news-a">
                  <h3 onClick={()=> setHideSide(true)}>Saidalixon Sobirov</h3>
                </Link>
                <div className="baho-flex">
                  <div>
                    <p>{t("Оцените новость")}</p>

                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        defaultValue={1}
                        precision={0.5}
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
                        {t("Рейтинг")}: <span>3.5</span>
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
                    <p>https://effect.uz/posts/1548</p>
                    <button>{t("Kопировать")}</button>
                  </div>
                </div>
              </div>

              <div className="izoh-qoldirish-div">
                <div className="izoh-qoldirish-header-flex">
                  <h3>{t("Оставить комментарий")}</h3>
                  <div></div>
                </div>

                <div className="izoh-qoldirish-text">
                  <textarea
                    name="text"
                    placeholder="Enter your comment here..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  ></textarea>
                </div>
                <button
                  onClick={() => addCommentClicked(item.id)}
                  className="post-btn"
                >
                  Post Comment
                </button>
              </div>
              {/* {item.comments.length < 1 ? (
              <div className="zero-izoh-div">
                <h3>Izoh Qoldirilmagan !!!</h3>
                <h4>Siz Boshlab bering </h4>
                <i className='bx bx-wink-smile'></i>
              </div>
            ) : (<div className="all-comments">
            <div className="comment-header-flex">
              <h3>
                Barcha Izohlar (
                {item.comments.length < 10
                  ? "0" + item.comments.length
                  : item.comments.length}
                )
              </h3>
              <img src={arrCircle} alt="img" />
            </div>

            <div className="izoh-container">
              {item.comments.map((el) => (
                <div className="izoh-item-item" key={el.id}>
                <div className="izoh-name-flex">
                  <h4>{el.userAgent}</h4>
                  <div className="izoh-img-flex">
                    <div>
                    <svg
                        width={20}
                        height={19}
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83317 17.4167H3.33317C2.89114 17.4167 2.46722 17.2498 2.15466 16.9529C1.8421 16.656 1.6665 16.2533 1.6665 15.8333V10.2917C1.6665 9.87174 1.8421 9.46901 2.15466 9.17208C2.46722 8.87515 2.89114 8.70833 3.33317 8.70833H5.83317M11.6665 7.125V3.95833C11.6665 3.32844 11.4031 2.72435 10.9343 2.27895C10.4654 1.83355 9.82954 1.58333 9.1665 1.58333L5.83317 8.70833V17.4167H15.2332C15.6351 17.421 16.0252 17.2872 16.3314 17.0398C16.6377 16.7925 16.8396 16.4484 16.8998 16.0708L18.0498 8.94583C18.0861 8.71891 18.07 8.4872 18.0026 8.26678C17.9353 8.04636 17.8183 7.84248 17.6597 7.66928C17.5012 7.49608 17.3049 7.35769 17.0845 7.26371C16.8641 7.16973 16.6248 7.1224 16.3832 7.125H11.6665Z"
                          stroke="#072D4B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                      <div>
                      <svg
                        width={19}
                        height={19}
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.4582 1.58334H15.572C16.02 1.57541 16.4554 1.73228 16.7954 2.02415C17.1355 2.31603 17.3565 2.72259 17.4166 3.16667V8.70834C17.3565 9.15241 17.1355 9.55898 16.7954 9.85085C16.4554 10.1427 16.02 10.2996 15.572 10.2917H13.4582M7.91657 11.875V15.0417C7.91657 15.6716 8.16679 16.2757 8.61219 16.721C9.05759 17.1664 9.66168 17.4167 10.2916 17.4167L13.4582 10.2917V1.58334H4.52824C4.14639 1.57902 3.77585 1.71285 3.48489 1.96016C3.19393 2.20748 3.00216 2.55162 2.9449 2.92917L1.8524 10.0542C1.81796 10.2811 1.83326 10.5128 1.89726 10.7332C1.96125 10.9536 2.0724 11.1575 2.22301 11.3307C2.37362 11.5039 2.56009 11.6423 2.76949 11.7363C2.97889 11.8303 3.20623 11.8776 3.43574 11.875H7.91657Z"
                          stroke="#072D4B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      </div>
                      
                  </div>
                </div>

                <p className="izoh-desc">
                  {el.description}
                </p>

                <span className="izoh-span">Posted on Jul 5, 2021 | 6:22 AM</span>
                <button className="izoh-reply" >Reply</button>
              </div>
              ))}
              
            </div>
          </div>)} */}
            </div>
          );
        }
      })}
    </>
  );
}
