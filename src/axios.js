import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

instance.interceptors.request.use((config) => {
  const newConfig = { ...config };
  return newConfig;
});

export default instance;
