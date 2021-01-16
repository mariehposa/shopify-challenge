import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import SearchForm from "./searchForm";
import { getMovieList } from "../redux/movies/actionCreators";

const MovieList = (props) => {
  const { fetchMovies, movieList } = props;

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <SearchForm />
      {movieList.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movies.movieList,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps, {
  fetchMovies: () => getMovieList(),
})(MovieList);
