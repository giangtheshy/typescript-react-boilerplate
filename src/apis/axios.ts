import axios from "axios";
import store from "../store/store";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "https://khumuivietnam.herokuapp.com/" : "http://localhost:5000/api",
});

axios.interceptors.request.use(function (config) {
  const token = store.getState().product.products;
  // config.headers.Authorization = token;

  return config;
});
axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
    if (error.response.status === 403) {
      alert("Phiên đăng nhập đã hết hạn! Trang web sẽ tự động refresh để tiếp tục...");
      window.location.reload();
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
