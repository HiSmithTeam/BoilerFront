import axios from "axios";
import { error } from "console";

// Common setting
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// CSR 사용
const axiosInstance = axios.create({
  // baseURL: process.env.API_HOST,
  baseURL: "http://13.125.233.255:8080/",
  headers: {},
  // timeout:1000,
  // headers: {
  //   "Content-Type": "application/json;charset=UTF-8",
  // },
  // withCredentials: true,
  responseType: "json",
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// SSR 용 필요한지

export { axiosInstance };
