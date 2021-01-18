import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import { getMovieList } from "../redux/movies/actionCreators";
import "../styles/movie.scss";

const MovieList = (props) => {
  const { fetchMovies, movieList, nominations } = props;

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="list">
      {nominations.length === 5 ? (
        <p className="banner">
          {"⚠️You've reached the maximum number of nominations."}
        </p>
      ) : null}
      <div className="card-pack">
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="empty-result">Search did not have any matches</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movies.movieList,
  loading: state.movies.loading,
  error: state.movies.error,
  nominations: state.nominations.nominations,
});

export default connect(mapStateToProps, {
  fetchMovies: () => getMovieList(),
})(MovieList);
