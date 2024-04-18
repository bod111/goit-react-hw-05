// import React from "react";

import { NavLink } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}>
            <li>
              <p>{movie.original_title}</p>
            </li>
          </NavLink>
        );
      })}
    </ul>
  );
}
