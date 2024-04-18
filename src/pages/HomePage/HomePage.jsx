import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../service/api";

export default function HomePage() {
  const [filmTrend, setFilmTrend] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then((res) => setFilmTrend((prev) => [...prev, ...res.results]))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <h3>Tranding today</h3>
      <MovieList movies={filmTrend} />
    </div>
  );
}
