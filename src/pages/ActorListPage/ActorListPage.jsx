import React from 'react'
import { movies } from "../../data.js";
import ActorCard from '../../components/ActorCard/ActorCard.jsx';


function MoviesListPage() {

    let actorSet = new Set();

    movies.forEach(movie => {
      // .Add is a Set method
        movie.cast.forEach(actor => actorSet.add(actor));
    });

    let actorArray = Array.from(actorSet);

    return (
        <div>
            <h1>Actor List Page</h1>
            <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '100px' 
      }}>
                {actorArray.map((actor, idx) => (
                    <ActorCard key={idx} actor={actor} />
                ))}
            </div>
        </div>
    );
}

export default MoviesListPage
