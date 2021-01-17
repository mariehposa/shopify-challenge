import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import { getMovieList } from "../redux/movies/actionCreators";
import "../styles/movie.scss";

const MovieList = (props) => {
  const { fetchMovies, movieList } = props;

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="card-pack">
      {movieList.length > 0 ? (
        movieList.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>Search did not have any matches</p>
      )}
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
