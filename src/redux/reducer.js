import * as types from "./actionTypes";

const initial = {
    text: 'hello world'
}

function Reducer(state=initial, action){
    switch(action.type) {
        case types.COUNT:
            return {
                ...state
            }
        default:
            return state
    }
}

export default Reducer