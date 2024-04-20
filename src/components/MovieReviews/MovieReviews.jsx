import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { getMovieReviews } from "../../service/api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getMovieReviews(movieId)
      .then(setReviews)
      .catch((err) => console.log(err.message));
  }, [movieId]);
  if (reviews?.results?.length) {
    return reviews?.results?.map((review) => (
      <div key={review.id}>
        Author: {review.author}
        <p className="">{review.content}</p>
      </div>
    ));
  }
  return (
    <li>
      <p>We dont have any reviews for this movies.</p>
    </li>
  );
}
