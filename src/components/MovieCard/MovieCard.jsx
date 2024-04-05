import React from 'react';
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}><div className="movie-card"
    style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 250,
        height: 400,
        backgroundImage: `url(${movie.posterPath})`,
        backgroundSize: 'cover',
        color: 'white',
    }}
    >
      <h2>{movie.title}</h2>
      <p>{movie.releaseDate}</p>
    </div>
    </Link>
  );
}

export default MovieCard;