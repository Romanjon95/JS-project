"use strict";

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('One of the latest films you watched?', ''),
        b = prompt('Rate it?', '');
  
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('You have watched a few movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('You are a typical client');
} else if (personalMovieDB.count >= 30) {
  console.log('You are a kinoman');
} else {
  console.log('Error 404');
}

console.log(personalMovieDB);
