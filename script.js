'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const answer_1 = prompt('Один из последних просмотренных фильмов?', ''),
      answer_2 = prompt('На сколько оцените его?', ''),
      answer_3 = prompt('Один из последних просмотренных фильмов?', ''),
      answer_4 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[answer_1] = answer_2;
personalMovieDB.movies[answer_3] = answer_4;

console.log(personalMovieDB);