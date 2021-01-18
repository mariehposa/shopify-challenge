import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../styles/header.scss";
import SearchForm from "./searchForm";

function Header(props) {
  const { history } = props;
  return (
    <div className="header sticky-inner">
      <NavLink to="/" className="shoppies">
        The Shoppies
      </NavLink>
      <div>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/nomination_list">Nominations</NavLink>
      </div>
      <SearchForm hidden={history.location.pathname === "/nomination_list"} />
    </div>
  );
}

export default withRouter(Header);
