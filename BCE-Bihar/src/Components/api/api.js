import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL|| "https://universal-j7iy.onrender.com/"||"http://localhost:3000/",
    withCredentials: true

});

export default api;