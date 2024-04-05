import React from "react";
import { movies } from "../../data"; // Importing the movies array from data.js
import { useParams } from "react-router-dom";

function MovieDetailPage() {
  let params = useParams();

  const movie = movies.find((movie) => movie.title === params.movieName);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterPath} alt={movie.title} />
      <p>Release Date: {movie.releaseDate}</p>
      <h2>Cast:</h2>
      <ul>
        {movie.cast.join(', ')}
      </ul>
    </div>
  );
}

export default MovieDetailPage;