import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./movieCard";

const apiUrl = `http://www.omdbapi.com/?s=ash&apikey=${process.env.REACT_APP_API_KEY}`

export default function MovieList() {
    const [ moviesList, setMoviesList ] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data);
                setMoviesList(res.data.Search)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            {
                moviesList.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            }
        </div>
    )
}