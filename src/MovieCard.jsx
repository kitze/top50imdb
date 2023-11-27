// MovieCard.js

import React from 'react';

const MovieCard = ({ title, year, image, watched, onToggleWatched }) => {
  return (
    <button
      role="button"
      className={`movie-card ${watched ? 'watched' : ''}`}
      onClick={onToggleWatched}
    >
      <img src={image} alt={title} />
      <div className="movie-details">
        <div style={{ fontSize: 11 }}>{title}</div>
      </div>
    </button>
  );
};

export default MovieCard;
