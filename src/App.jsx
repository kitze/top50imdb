// App.js

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import { useArray } from 'react-hanger';

import movies from './movies.json';

const App = () => {

  const localStorageValue = localStorage.getItem('watchedMovies');

  const watchedMovies = useArray(localStorageValue ? JSON.parse(localStorageValue) : []);

  const handleWatchedToggle = (index) => {
    const has = !!watchedMovies.value.find((m) => m.id === index);
    !has ? watchedMovies.add({ id: index }) : watchedMovies.removeById(index);
  };

  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies.value));
  }, [watchedMovies]);

  return (
    <>
      <header>
        <h2>
          📽️ I have seen {watchedMovies.value.length}/{movies.length} top movies
          on IMDb 🍿
        </h2>
      </header>
      <main>
        <div className="movie-grid">
          {movies.map((movie, index) => {
            const watched = watchedMovies.value.find((m) => m.id === index);
            console.log({watched})
            return (
              <MovieCard
                key={index}
                title={movie.title}
                year={movie.year}
                image={movie.image}
                watched={watched}
                onToggleWatched={() => handleWatchedToggle(index)}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default App;
