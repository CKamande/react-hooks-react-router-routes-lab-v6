import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article>
      <h2>{movie.title}</h2>
      {/* Link to the Movie Details page using movie ID */}
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </article>
  );
}

export default MovieCard;
