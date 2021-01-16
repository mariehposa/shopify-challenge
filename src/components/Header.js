import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <NavLink to="/">The Shoppies</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/nomination_list">Nominations</NavLink>
        </div>
    )
}