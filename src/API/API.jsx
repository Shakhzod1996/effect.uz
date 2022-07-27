import axios from "axios";

const token = "434gW_nyNC_BsHlO3HO8OQP9aoFBNSY0rLCG602CEgWpz271Dk";
const headers = {
  headers: {
    "Content-Type": "application/json;",
    Authorization: `Bearer ${token}`,
  },
};
// ? POST REQUEST
const LOGIN_URL = "https://simply.uz/api/login";
const NEWS_END = "https://simply.uz/api/news-end?count";

// ?GET REQUEST
const CATEGORY_URL = "https://simply.uz/api/category";
const PROVENCE_URL = "https://simply.uz/api/provence";
const CONFIG_URL = "https://simply.uz/api/config";
const NEWS_URL = "https://simply.uz/api/news-all";
const NEW_URL = "https://simply.uz/api/new?id";

const API = {
  // ?POST METHODS
  login: (params) => axios.post(LOGIN_URL, params),
  newsFour: (num) => axios.post(`${NEWS_END}=${num}`, headers),

  // ?GET METHODS
  category: () => axios.get(CATEGORY_URL, headers),
  provence: () => axios.get(PROVENCE_URL, headers),
  config: () => axios.get(CONFIG_URL, headers),
  news: () => axios.get(NEWS_URL, headers),
  newItem: (ID) => axios.get(`${NEW_URL}=${ID}`, headers),
};

export default API;
