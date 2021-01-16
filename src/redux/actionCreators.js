import * as types from "./actionTypes";

export const Movielist = (payload) => {
    return {
        type: types.MOVIELIST,
        payload
    }
}

export const Count = (payload) => {
    return {
        type: types.COUNT,
        payload
    }
}