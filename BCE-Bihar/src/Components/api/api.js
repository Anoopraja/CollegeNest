import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL ||
        (import.meta.env.DEV
            ? "http://localhost:3000"
            : "https://universal-j7iy.onrender.com"),
    withCredentials: true

});


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api;