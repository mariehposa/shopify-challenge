import * as types from "./actionTypes";

export const addNomination = (payload) => {
  return {
    type: types.ADD_NOMINATION,
    payload,
  };
};

export const deleteNomination = (payload) => {
  return {
    type: types.DELETE_NOMINATION,
    payload,
  };
};
