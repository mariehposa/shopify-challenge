import * as types from "./actionTypes";
import axios from "axios";

export const getMovieList = (searchTerm = "ash") => (dispatch) => {
  dispatch({ type: types.GET_MOVIELIST_START });
  axios
    .get(
      `https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      dispatch({
        type: types.GET_MOVIELIST_SUCCESS,
        payload: res.data.Search ?? [],
      });
    })
    .catch((err) => {
      dispatch({ type: types.GET_MOVIELIST_FAIL, payload: err.message });
    });
};
