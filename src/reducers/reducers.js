import { combineReducers } from "redux";
import {
  SET_MOVIES,
  SET_FILTER,
  SET_USER,
  ADD_FAVMOVIE,
  DEL_FAVMOVIE
} from "../actions/actions";

function visibilityFilter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.value;
    default:
      return state;
  }
}

function movies(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      console.log("SET_MOVIES reducer reached")
      return action.value;
    default:
      return state;
  }
}

function user(state = "", action) {
  switch (action.type) {
    case SET_USER:
      console.log("SET_USER reducer reached")
      return action.value || localStorage.getItem("user") || "";
    case ADD_FAVMOVIE:
      return action.value;
    case DEL_FAVMOVIE:
      return action.value;
    default:
      return state;
  }
}

const movieApp = combineReducers({
  visibilityFilter,
  movies,
  user
});

export default movieApp;