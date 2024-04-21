import css from "./MovieList.module.css";

import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li className={css.component} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <p>- {movie.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
