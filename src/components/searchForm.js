import { getMovieList } from "../redux/movies/actionCreators";
import { connect } from "react-redux";
import "../styles/searchForm.scss";

const SearchForm = (props) => {
  const { fetchMovies } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    fetchMovies(value);
  };

  return (
    <form className="form">
      <i class="fa fa-search"></i>
      <input
        type="text"
        onChange={handleChange}
        name="title"
        placeholder="Movie title..."
      />
    </form>
  );
};

export const mapStateToProps = (state) => ({
  movieList: state.movies.movieList,
  loading: state.movies.loading,
  error: state.movies.error,
});

export default connect(mapStateToProps, {
  fetchMovies: (a) => getMovieList(a),
})(SearchForm);
