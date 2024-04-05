import React from 'react';
import { Link } from 'react-router-dom'

function ActorCard({ actor }) {
  return (
    <Link to={`/actors/${actor}`}><div className="actor-card"
    style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 250,
        height: 300,
        backgroundImage: `url(https://picsum.photos/id/64/200/300?blur)`,
        backgroundSize: 'cover',
        color: 'black',
    }}
    >
      <h2>{actor}</h2>
    </div>
    </Link>
  );
}

export default ActorCard;