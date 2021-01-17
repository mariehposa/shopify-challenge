import { connect } from "react-redux";
import { deleteNomination } from "../redux/nominations/actionCreators";
import MovieCard from "./movieCard";
import "../styles/movie.scss";

const NominationList = (props) => {
  const { nominations } = props;

  return (
    <div className="card-pack">
      {nominations.length >= 5 ? (
        <p className="badge">Your nomination is 5</p>
      ) : (
        ""
      )}
      {nominations.length > 0 ? (
        nominations.map((movie) => (
          <MovieCard key={movie.imdbID} action={"remove"} movie={movie} />
        ))
      ) : (
        <p>Your nomination list is empty</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  nominations: state.nominations.nominations,
  loading: state.nominations.loading,
  error: state.nominations.error,
});

export default connect(mapStateToProps, {
  deleteNomination: (id) => deleteNomination(id),
})(NominationList);
