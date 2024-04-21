import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../service/api";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParams = searchParams.get("query");
    if (!queryParams) return setMovies([]);
    getSearchMovie(queryParams)
      .then((res) => setMovies([...res.results]))
      .catch((err) => console.log(err.message));
  }, [searchParams]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.toLowerCase();
    !topic.trim() ? notify() : setSearchParams({ query: topic });
    form.reset();
  };
  const notify = () => toast.error("enter a search term!");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputFilm}
          type="text"
          autoComplete="off"
          autoFocus
          name="topic"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
      <MovieList movies={movies} />
    </div>
  );
}
