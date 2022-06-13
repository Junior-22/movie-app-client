// action types
export const SET_MOVIES = "SET_MOVIES";
export const SET_FILTER = "SET_FILTER";
export const SET_USER = "SET_USER";
export const ADD_FAVMOVIE = "ADD_FAVMOVIE";
export const DEL_FAVMOVIE = "DEL_FAVMOVIE";


// action creators
export function setMovies(value) {
  console.log("SET_MOVIES action triggered")
  return {
    type: SET_MOVIES,
    value
  }
}

export function setFilter(value) {
  return {
    type: SET_FILTER,
    value
  }
}

export function setUser(value) {
  console.log("SET_USER action triggered")
  return {
    type: SET_USER,
    value
  }
}

export function addFavMovie(value) {
  return {
    type: ADD_FAVMOVIE,
    value
  }
}

export function delFavMovie(value) {
  return {
    type: DEL_FAVMOVIE,
    value
  }
}