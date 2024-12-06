import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const quotableApi = axios.create({
  baseURL: "https://api.quotable.io/",
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = "";
};
