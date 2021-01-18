import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import SearchForm from "./searchForm";

export default function Header() {
  // function display(params) {
  //   if (params === "movies") {
  //     <SearchForm />;
  //   }
  // }
  return (
    <div className="header sticky-inner">
      <NavLink to="/" className="shoppies">
        The Shoppies
      </NavLink>
      <div>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/nomination_list">Nominations</NavLink>
      </div>
      <SearchForm />
    </div>
  );
}
