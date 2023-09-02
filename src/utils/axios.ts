import axios from "axios";
import { error } from "console";

// Common setting
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// CSR 사용
const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {},
  timeout: 1000,
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

// SSR 용 필요한지

export { axiosInstance };
