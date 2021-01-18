import React from "react";
import { connect } from "react-redux";
import { deleteNomination } from "../redux/nominations/actionCreators";
import MovieCard from "./movieCard";
import "../styles/movie.scss";

const NominationList = (props) => {
  const { nominations } = props;

  return (
    <div className="list">
      {nominations.length === 5 ? (
        <p className="banner">
          Yay🎉 You have nominated {nominations.length} movies for The
          Shoppies🔥
        </p>
      ) : (
        ""
      )}
      <div className="card-pack">
        {nominations.length > 0 ? (
          nominations.map((movie) => (
            <MovieCard key={movie.imdbID} action={"remove"} movie={movie} />
          ))
        ) : (
          <p className="empty-result">Your nomination list is empty</p>
        )}
      </div>
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
