import {
    CREATE_SUCCESS,
    CREATE_FAIL,
    GET_SUCCESS,
    GET_FAIL,
    UPDATE_SUCCESS,
    UPDATE_FAIL,
    DELETE_SUCCESS,
    DELETE_FAIL
  } from "../actions/types";
  
  const task = JSON.parse(localStorage.getItem("task"));
  
  const initialState = task
    ? { taskEmpty: true, task }
    : { taskEmpty: false, task: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_SUCCESS:
        return {
          ...state,
          taskCreated: true,
        };
      case CREATE_FAIL:
        return {
          ...state,
          taskCreated: false,
        };
      case GET_SUCCESS:
        return {
          ...state,
          taskEmpty: false,
          task: payload.task,
        };
      case GET_FAIL:
        return {
          ...state,
          taskEmpty: true,
          task: null,
        };
      case UPDATE_SUCCESS:
        return {
          ...state,
          taskUpdated: true,
        };
        case UPDATE_FAIL:
            return {
              ...state,
              taskUpdated: false,
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                taskDeleted: true,
            };
        case DELETE_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
      default:
        return state;
    }
  }
  