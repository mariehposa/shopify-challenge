import { getMovieList } from "../redux/movies/actionCreators";
import { connect } from "react-redux";

const SearchForm = (props) => {

    const { fetchMovies } = props;

    const handleChange = e => {
        const value = e.target.value
        fetchMovies(value)
    }

    return (
        <form>
            <input type="text" onChange={handleChange} name="title" placeholder="search" />
        </form>
    )
}

export const mapStateToProps = state => ({
    movieList: state.movies.movieList,
    loading: state.movies.loading,
    error: state.movies.error
})

export default connect(mapStateToProps, {
    fetchMovies: (a) => getMovieList(a)
})(SearchForm)