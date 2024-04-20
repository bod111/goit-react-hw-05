import { NavLink, useLocation, useParams, Outlet } from "react-router-dom";
import { getMovieDetals } from "../../service/api";
import { Suspense, useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const { state } = useLocation();
  console.log("MovieDetailsPage ~ state:", state);
  const prevPath = useRef(state);
  console.log("MovieDetailsPage ~ prevPath:", prevPath);

  useEffect(() => {
    getMovieDetals(movieId)
      .then(setMovieDetails)
      .catch((err) => console.log(err.message));
  }, [movieId]);

  return (
    <container className={css.movieContainer}>
      <NavLink to={prevPath.current}>
        <button className={css.btn} type="button">
          {"<- Go back"}
        </button>
      </NavLink>
      {movieDetails && (
        <div>
          <div className={css.movieBox}>
            {movieDetails.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt=""
              />
            )}
            <div className={css.movieDiscrBox}>
              <h2>
                {movieDetails.title}(
                {new Date().getFullYear(movieDetails.release_date)})
              </h2>
              <p>User Score: {(movieDetails.vote_average * 10).toFixed(1)}%</p>
              <h3 className="">Overview</h3>
              <p className="">{movieDetails.overview}</p>
              <h3 className="">Genres</h3>
              <ul className={css.genres}>
                {movieDetails.genres?.map((genre) => (
                  <li className="" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </container>
  );
}
