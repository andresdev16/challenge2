import axios from "axios";

const API_URL = "http://127.0.0.1:4000/api/tasks/";

export const create = (token, name, details, date, status, important) => {
  return axios.post(API_URL + "signup", { name, details, date, status, important }, { headers: token })
};

export const read = (token, userId) => {
    return axios.post(API_URL + "taskList", { userId }, {  headers: token })
}

export const update = (token, name, details, date, status, important) => {
    return axios.put(API_URL + "updateTask", { name, details, date, status, important }, {headers: token })
};

export const deleteT = (token, taskId) => {
    return axios.post(API_URL + "deleteTask", { taskId }, { headers: token })
  };
