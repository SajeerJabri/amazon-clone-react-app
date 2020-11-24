import axios from "axios";

const instance = axios.create({
  baseUrl: "...", // the api url
});

export default instance;
