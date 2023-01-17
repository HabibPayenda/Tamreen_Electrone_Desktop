import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.43.211:8000/api",
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response.message);
  }
);

export default instance;
