import axios from "axios";

const api = axios.create({
  baseURL: process.env.BACKEND_SERVICE_URL,
});

export { api };
