import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://127.0.0.1:4000/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response) {
        localStorage.setItem("user", JSON.stringify(response));
      }

      return response.data;
    });
};

const updateProfile = (userId, username, email, password) => {
  return axios
    .put(API_URL + "updateProfile", {
      userId,
      username,
      email,
      password
    }, authHeader() )
}

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
  updateProfile,
};
