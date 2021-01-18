import { connect } from "react-redux";
import {
  addNomination,
  deleteNomination,
} from "../redux/nominations/actionCreators";
import "../styles/movie.scss";

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
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <p>{movie.Title}</p>
        <p>Year: {movie.Year}</p>
        <p>Type: {movie.Type}</p>
        <button
          className={action === "add" ? "normal-button" : "danger-button"}
          disabled={
            nominations.map((e) => e.imdbID).includes(movie.imdbID) ||
            nominations.length === 5
              ? action === "add"
              : ""
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
