import axios from "axios";

const header = {
  header: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `m74RW2ED2gXtb3fIH212_GUsRTzS1CNs5svao2SE0u75EABMav`,
  },
};

const LOGIN_URL = "https://simply.uz/api/login";
const CATEGORY_URL = "https://simply.uz/api/category";
const NEWS_END = "https://simply.uz/api/news-end?count";

const API = {
  login: (params) => {
    axios.post(LOGIN_URL, params);
  },

  category: async () => {
    try {
      const response = await axios.get(CATEGORY_URL, header);
      return response;
    } catch (err) {
      console.log(err);
    }
  },

  newsEnd: async (COUNT) => {
    try {
      axios.post(`${NEWS_END}=${COUNT}`, header);
    } catch (err) {
      console.log(err);
    }
  },
};

export default API;
