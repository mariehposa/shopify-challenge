import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieCard from "./movieCard";
import SearchForm from "./searchForm";
import { getMovieList } from "../redux/movies/actionCreators";
import "../styles/movie.scss";

const MovieList = (props) => {
  const { fetchMovies, movieList } = props;

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <SearchForm />
      <div className="card-pack">
        {movieList.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
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
