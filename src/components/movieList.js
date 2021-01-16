import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=3578d840`
export default function MovieList() {
    const [ movieList, setMoveList ] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>

        </div>
    )
}