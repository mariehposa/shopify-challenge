import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./movieCard";
import SearchForm from "./searchForm";

const apiUrl = `http://www.omdbapi.com/?s=ash&apikey=${process.env.REACT_APP_API_KEY}`

const MovieList = () => {
    const [ moviesList, setMoviesList ] = useState([]);
    const [url, setUrl ] = useState(apiUrl);

    const search = (formValues, actions) =>{
        const title = formValues.title.toLowercase();
        const newUrl = `http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_API_KEY}`
        console.log(newUrl);
        setUrl(newUrl)
    }

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                console.log(res.data);
                setMoviesList(res.data.Search)
            })
            .catch(err => {
                // console.log(err.message)
            })
    }, [url])

    return (
        <div>
            <SearchForm onSubmit={search} />
            {
                moviesList.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            }
        </div>
    )
}

export default MovieList;