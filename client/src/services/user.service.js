import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

const getProfile= () => {
  return axios.get(API_URL + "profile", { headers: authHeader() });
};

export default {
  getProfile
};