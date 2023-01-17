const axios = require("axios");

const instance = axios.create({
  baseURL: "http://192.168.43.211:8000/photos/",
});

export default instance;
