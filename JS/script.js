"use strict";

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('One of the latest films you watched?', ''),
      b = prompt('Rate it?', ''),
      c = prompt('One of the latest films you watched?', ''),
      d = prompt('Rate it?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
