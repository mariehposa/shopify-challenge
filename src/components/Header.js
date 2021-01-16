import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <p>The Shoppies</p>
            <div>
                <NavLink to="/">Movie List</NavLink>
                <NavLink to="/nomination_list">Nomination List</NavLink>
            </div>
        </div>
    )
}