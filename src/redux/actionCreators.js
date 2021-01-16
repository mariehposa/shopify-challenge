import * as types from "./actionTypes";
import axios from "axios";

const apiUrl = `http://www.omdbapi.com/?s=ash&apikey=${process.env.REACT_APP_API_KEY}`

export const Movielist = (payload) => {
    return {
        type: types.MOVIELIST,
        payload
    }
}

export const Count = () => dispatch => {
    axios.get(apiUrl)
    .then(res => {
        dispatch(res.data.Search)
    })
    .catch(err => {
        dispatch(err.message)
    })
}