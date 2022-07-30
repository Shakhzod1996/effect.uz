import axios from "axios";

const token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg";

// ?Currency Request
const Currency_Api_USD =
  "https://api.fastforex.io/fetch-all?api_key=8f88f1b08d-a22ea0a6b7-rfs5m2";
const Currency_Api_EUR =
  "https://api.fastforex.io/fetch-all?from=EUR&api_key=8f88f1b08d-a22ea0a6b7-rfs5m2";
const Currency_Api_RUB =
  "https://api.fastforex.io/fetch-all?from=RUB&api_key=8f88f1b08d-a22ea0a6b7-rfs5m2";

const headers = {
  headers: {
    "Content-Type": "application/json;",
    Authorization: `Bearer ${token}`,
  },
};

// ?Weather API

// ? POST REQUEST
const LOGIN_URL = "https://simply.uz/api/login";
const NEWS_END = "https://simply.uz/api/news-end?count";
const COME_URL = "https://simply.uz/api/come";
const ADVERT_URL = "https://simply.uz/api/advert";
const COMMENT_URL = "https://simply.uz/api/comment";
const RESEPTION_URL = "https://simply.uz/api/reception";
const STAR_URL = "https://simply.uz/api/star";

// ?GET REQUEST
const CATEGORY_URL = "https://simply.uz/api/category";
const PROVENCE_URL = "https://simply.uz/api/provence";
const CONFIG_URL = "https://simply.uz/api/config";
const NEWS_URL = "https://simply.uz/api/news-all";
const NEW_URL = "https://simply.uz/api/new?id";

const API = {
  // ?POST METHODS
  login: (params) => axios.post(LOGIN_URL, params),
  newsFour: (params) => axios.post(`${NEWS_END}`, params, headers),
  comment: (params) => axios.post(`${COMMENT_URL}`, params, headers),

  // ?GET METHODS
  category: () => axios.get(CATEGORY_URL, headers),
  provence: () => axios.get(PROVENCE_URL, headers),
  config: () => axios.get(CONFIG_URL, headers),
  news: () => axios.get(NEWS_URL, headers),
  newItem: (ID) => axios.get(`${NEW_URL}=${ID}`, headers),

  // ?Currency
  currency_USD: () => axios.get(Currency_Api_USD),
  currency_EUR: () => axios.get(Currency_Api_EUR, headers),
  currency_RUB: () => axios.get(Currency_Api_RUB, headers),

  // ?Weather
  // weather: async(query) => {
  //   const data = await axios.get(WEATHER_URL, {params: {
  //     q: query,
  //     units: "metric",
  //     APPID: weatherToken
  //   }})

  //   return data;
  // }
};

export default API;
