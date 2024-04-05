import React from 'react'
import { movies } from "../../data.js";
import MovieCard from '../../components/MovieCard/MovieCard.jsx';


function MoviesListPage() {

  return (
    <div>
      <h1>Movie List Page</h1>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '100px' 
      }}>
          {movies.map((movie, idx) => (
          <MovieCard key={idx} movie={movie} />
          ))}
        </div>
    </div>
  )
}

export default MoviesListPage
