import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import SearchForm from "./searchForm";

export default function Header() {
  const condition = "movies";
  return (
    <div className="header sticky-inner">
      <NavLink to="/" className="shoppies">
        The Shoppies
      </NavLink>
      <div>
        <NavLink to="/movies" id="movies">
          Movies
        </NavLink>
        <NavLink to="/nomination_list" id="nom">
          Nominations
        </NavLink>
      </div>
      {condition ? <SearchForm /> : ""}
    </div>
  );
}
