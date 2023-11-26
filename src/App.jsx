// App.js

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import { useArray } from 'react-hanger';

const movies = [
  {
    title: '1. The Shawshank Redemption',
    year: '1994',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '2. The Godfather',
    year: '1972',
    image:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY207_CR3,0,140,207_.jpg',
  },
  {
    title: '3. The Dark Knight',
    year: '2008',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '4. The Godfather Part II',
    year: '1974',
    image:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY207_CR3,0,140,207_.jpg',
  },
  {
    title: '5. 12 Angry Men',
    year: '1957',
    image:
      'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX140_CR0,4,140,207_.jpg',
  },
  {
    title: "6. Schindler's List",
    year: '1993',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '7. LOTR: The Return of the King',
    year: '2003',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '8. Pulp Fiction',
    year: '1994',
    image:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UY207_CR1,0,140,207_.jpg',
  },
  {
    title: '9. LOTR: The Fellowship of the Ring',
    year: '2001',
    image:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '10. The Good, the Bad and the Ugly',
    year: '1966',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '11. Forrest Gump',
    year: '1994',
    image:
      'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UY207_CR2,0,140,207_.jpg',
  },
  {
    title: '12. Fight Club',
    year: '1999',
    image:
      'https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '13. The Lord of the Rings: The Two Towers',
    year: '2002',
    image:
      'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,5,140,207_.jpg',
  },
  {
    title: '14. Inception',
    year: '2010',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '15. Star Wars: Episode V - The Empire Strikes Back',
    year: '1980',
    image:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX140_CR0,5,140,207_.jpg',
  },
  {
    title: '16. The Matrix',
    year: '1999',
    image:
      'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '17. Goodfellas',
    year: '1990',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: "18. One Flew Over the Cuckoo's Nest",
    year: '1975',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '19. Se7en',
    year: '1995',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,6,140,207_.jpg',
  },
  {
    title: "20. It's a Wonderful Life",
    year: '1946',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_QL75_UY207_CR1,0,140,207_.jpg',
  },
  {
    title: '21. Seven Samurai',
    year: '1954',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTkwY2I5NWMtMjNlNi00ZThjLWI4NzQtNDI4M2I4OGM1YjAzXkEyXkFqcGdeQXVyNzYxODE3NTQ@._V1_QL75_UY207_CR3,0,140,207_.jpg',
  },
  {
    title: '22. Interstellar',
    year: '2014',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '23. The Silence of the Lambs',
    year: '1991',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY207_CR0,0,140,207_.jpg',
  },
  {
    title: '24. Saving Private Ryan',
    year: '1998',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UY207_CR1,0,140,207_.jpg',
  },
  {
    title: '25. City Of God',
    year: '2002',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGU5OWEwZDItNmNkMC00NzZmLTk1YTctNzVhZTJjM2NlZTVmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UY207_CR0,0,140,207_.jpg',
  },
  {
    title: '26. Life Is Beautiful',
    year: '1997',
    image:
      'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '27. Spider-Man: Across the Spider-Verse',
    year: '2023',
    image:
      'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '28. The Green Mile',
    year: '1999',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '29. Star Wars',
    year: '1977',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX140_CR0,3,140,207_.jpg',
  },
  {
    title: '30. Terminator 2: Judgment Day',
    year: '1991',
    image:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '31. Back to the Future',
    year: '1985',
    image:
      'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_QL75_UX140_CR0,5,140,207_.jpg',
  },
  {
    title: '32. Spirited Away',
    year: '2001',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '33. The Pianist',
    year: '2002',
    image:
      'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY207_CR5,0,140,207_.jpg',
  },
  {
    title: '34. Psycho',
    year: '1960',
    image:
      'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '35. Parasite',
    year: '2019',
    image:
      'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '36. Gladiator',
    year: '2000',
    image:
      'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '37. The Lion King',
    year: '1994',
    image:
      'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '38. Léon',
    year: '1994',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '39. American History X',
    year: '1998',
    image:
      'https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '40. The Departed',
    year: '2006',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_QL75_UY207_CR0,0,140,207_.jpg',
  },
  {
    title: '41. Whiplash',
    year: '2014',
    image:
      'https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '42. The Prestige',
    year: '2006',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '43. The Usual Suspects',
    year: '1995',
    image:
      'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '44. Grave Of The Fireflies',
    year: '1988',
    image:
      'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
  {
    title: '45. Harakiri',
    year: '1962',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_QL75_UY207_CR6,0,140,207_.jpg',
  },
  {
    title: '46. Casablanca',
    year: '1942',
    image:
      'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_QL75_UX140_CR0,2,140,207_.jpg',
  },
  {
    title: '47. Intouchables',
    year: '2011',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '48. Modern Times',
    year: '1936',
    image:
      'https://m.media-amazon.com/images/M/MV5BYjJiZjMzYzktNjU0NS00OTkxLWEwYzItYzdhYWJjN2QzMTRlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX140_CR0,5,140,207_.jpg',
  },
  {
    title: '49. Cinema Paradiso',
    year: '1988',
    image:
      'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_QL75_UX140_CR0,0,140,207_.jpg',
  },
  {
    title: '50. Once Upon A Time In The West',
    year: '1968',
    image:
      'https://m.media-amazon.com/images/M/MV5BODQ3NDExOGYtMzI3Mi00NWRlLTkwNjAtNjc4MDgzZGJiZTA1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_QL75_UX140_CR0,1,140,207_.jpg',
  },
];

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
    <div className="root">
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
    </div>
  );
};

export default App;
