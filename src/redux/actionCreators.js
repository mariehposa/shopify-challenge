import * as types from "./actionTypes";

export const Count = (payload) => {
    return {
        type: types.COUNT,
        payload
    }
}