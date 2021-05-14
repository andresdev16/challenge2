import { combineReducers } from "redux";
import auth from "./auth";
import task from "./task";
import message from "./message";

export default combineReducers({
  auth,
  task,
  message,
});
