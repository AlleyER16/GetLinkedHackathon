import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend.getlinked.ai",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
