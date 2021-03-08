import Axios from "axios";

const apiClient = Axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://localhost:44373/api",
});

export default apiClient;
