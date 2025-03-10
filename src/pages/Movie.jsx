import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Duration: {movie.time} minutes</p>
      <div>
        {movie.genres.map((genre, index) => (
          <span key={index} style={{ marginRight: "10px" }}>{genre}</span>
        ))}
      </div>
    </div>
  );
}

export default Movie;
