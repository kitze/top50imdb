// MovieCard.js

import React from 'react';

const MovieCard = ({ title, year, image, watched, onToggleWatched }) => {
  const ariaLabel = (() => {
    const watchedIndicator = watched ? 'watched' : 'not watched';

    // If not decided yet, don't add information about watch state
    if (watched === undefined) return '';

    return `${title} ${watched !== null ? `is ${watchedIndicator}` : ''}`;
  })(watched)

  return (
    <button
      role="button"
      className={`movie-card ${watched ? 'watched' : ''}`}
      onClick={onToggleWatched}
      aria-label={ariaLabel}
    >
      <img src={image} alt={title} />
      <div className="movie-details">
        <div style={{ fontSize: 11 }}>{title}</div>
      </div>
    </button>
  );
};

export default MovieCard;
