import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://servicepad-post-api.herokuapp.com",
  headers: { "Content-Type": "application/json" },
});

export default apiClient;
