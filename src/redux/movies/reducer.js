import * as types from "./actionTypes";

const initState = {
    movieList: [],
    searchResults: [],
    loading: false,
    error: ''
}

function movieReducer(state = initState, action) {
    const {type, payload} = action
    switch(type) {
        case types.GET_MOVIELIST_START:
            return {
                ...state,
                loading: true,
            }

        case types.GET_MOVIELIST_SUCCESS:
            return {
                ...state,
                loading: false,
                movieList: payload
            }

        case types.GET_MOVIELIST_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        default:
            return state
    }
}

export default movieReducer;