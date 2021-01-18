import * as types from "./actionTypes";

const initialState = {
  movieList: [],
  loading: false,
  error: "",
};

function movieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MOVIELIST_START:
      return {
        ...state,
        loading: true,
      };

    case types.GET_MOVIELIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movieList: payload,
      };

    case types.GET_MOVIELIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
}

export default movieReducer;
