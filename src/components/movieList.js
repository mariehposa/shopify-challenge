import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import SearchForm from "./searchForm";
import { getMovieList } from "../redux/movies/actionCreators";

const apiUrl = `http://www.omdbapi.com/?s=ash&apikey=${process.env.REACT_APP_API_KEY}`

const MovieList = (props) => {
    console.log(props)
    const { fetchMovies, movieList   } = props;
    const [ url ] = useState(apiUrl);

    useEffect(() => {
        fetchMovies()
    }, [url, fetchMovies])

    return (
        <div>
            <SearchForm />
            {
                movieList.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    movieList: state.movies.movieList,
    loading: state.movies.loading,
    error: state.movies.error,
})

export default connect(mapStateToProps, {
    fetchMovies: () =>  getMovieList()
})(MovieList);