import * as types from "./actionTypes";

const initial = {
    text: 'hello world'
}

function countReducer(state=initial, action) {
    switch(action.type) {
        case types.COUNT:
            return {
                ...state
            }

        case types.MOVIELIST:
            return {
                ...state
            }
        default:
            return state
    }
}

export  {countReducer}