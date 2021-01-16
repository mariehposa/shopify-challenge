import * as types from "./actionTypes";

const initialState = {
  nominations: [],
  loading: false,
  error: "",
};

function nominationsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, payload],
      };

    case types.DELETE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter((e) => e.id !== payload.id),
      };

    default:
      return state;
  }
}

export default nominationsReducer;
