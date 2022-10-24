"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many films have you watched?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you watched?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('You have watched a few movies');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are a typical client');
  } else if (personalMovieDB.count >= 30) {
    console.log('You are a kinoman');
  } else {
    console.log('Error 404');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}`);
  }
}

writeYourGenres();

