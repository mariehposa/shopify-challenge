import { NavLink } from "react-router-dom";
import "../styles/header.scss";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="shoppies">
        The Shoppies
      </NavLink>
      <div>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/nomination_list">Nominations</NavLink>
      </div>
    </div>
  );
}
