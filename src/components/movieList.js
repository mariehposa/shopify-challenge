import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = `http://www.omdbapi.com/?s=ash&apikey=${process.env.REACT_APP_API_KEY}`

export default function MovieList() {
    const [ movieList, setMoveList ] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data);
                setMoveList(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            {
                movieList.map(movie => <MovieCard key={movie.id} movie={movie} />)
            }
        </div>
    )
}