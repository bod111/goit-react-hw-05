import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../service/api";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  const BASE_IMG = "https://image.tmdb.org/t/p/w200";
  const IMG_PLUG =
    "https://imgp.whaleshares.io/pimgp/a/einstei1/p/image-not-found-shitpostfriday/0x0/https://img.whaleshares.io/wls-img/einstei1/d765e65f432e7e6f0d062616d19364ecdc5631da.png";

  useEffect(() => {
    getMovieCast(movieId)
      .then(setActors)
      .catch((err) => console.log(err.message));
  }, [movieId]);
  return (
    <ul className={css.cast}>
      {actors &&
        actors.cast?.map((actor) => (
          <li key={actor.cast_id}>
            {actor.name}
            <p>Character: {actor.character}</p>
            {actor.profile_path ? (
              <img
                className=""
                src={`${BASE_IMG}/${actor.profile_path}`}
                alt=""
              />
            ) : (
              <img className="" src={`${IMG_PLUG}`} alt="" />
            )}
          </li>
        ))}
    </ul>
  );
}
