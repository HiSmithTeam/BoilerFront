import axios from "axios";

// Common setting
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// CSR 사용
const axiosInstance = axios.create({
  //   baseURL: process.env.API_HOST, TODO: 정의 필요
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  //   withCredentials: true,
  responseType: "json",
});

// SSR 용?

export { axiosInstance };
