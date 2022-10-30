"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('How many films have you watched?', '');
  
    while (personalMovieDB.count == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      personalMovieDB.count = +prompt('How many films have you watched?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('You have watched a few movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('You are a typical client');
    } else if (personalMovieDB.count >= 30) {
      console.log('You are a kinoman');
    } else {
      console.log('Error 404');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(`Your favourite genre number ${i}`);

      if (genres === '' || genres == null) {
        console.log('You have insert incorrect data or didnt insert nothing');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Favorite genre ${i + 1} - this is ${item}`);
    })
  }
};
