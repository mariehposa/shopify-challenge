import { connect } from "react-redux";
import {
  addNomination,
  deleteNomination,
} from "../redux/nominations/actionCreators";

const MovieCard = (props) => {
  const {
    movie,
    addNomination,
    deleteNomination,
    nominations,
    action = "add",
  } = props;

  const handleNominate = (movie) => {
    addNomination(movie);
  };

  const handleDelete = (id) => {
    deleteNomination(id);
  };

  return (
    <div>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      <button
        disabled={
          nominations.map((e) => e.imdbID).includes(movie.imdbID) &&
          action === "add"
        }
        onClick={
          action === "add"
            ? () => handleNominate(movie)
            : () => handleDelete(movie)
        }
      >
        {action === "add" ? "Nominate" : "Remove"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  nominations: state.nominations.nominations,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, {
  addNomination: (z) => addNomination(z),
  deleteNomination: (id) => deleteNomination(id),
})(MovieCard);
