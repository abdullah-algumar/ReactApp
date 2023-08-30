import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8866",
});

instance.interceptors.request.use((config) => {
  const newConfig = { ...config };
  return newConfig;
});

export default instance;
