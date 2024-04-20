import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.header}>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.navLink)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? css.active : css.navLink)}
        to="/movies"
      >
        Movies
      </NavLink>
      <hr className={css.drov} />
    </nav>
  );
}
