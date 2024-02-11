import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({ baseURL });

export function handleResponse(callback) {
  api.interceptors.response.use((response) => {
    callback();
    return response;
  }, null);
}

export default api;
