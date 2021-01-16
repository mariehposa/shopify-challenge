import { connect } from "react-redux";
import { deleteNomination } from "../redux/nominations/actionCreators";
import MovieCard from "./movieCard";

const NominationList = (props) => {
  const { nominations } = props;

  return (
    <div>
      {nominations.map((movie) => (
        <MovieCard key={movie.imdbID} action={"remove"} movie={movie} />
      ))}
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
