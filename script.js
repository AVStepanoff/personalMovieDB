'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let answer_1 = prompt('Один из последних просмотренных фильмов?', ''),
        answer_2 = prompt('На сколько оцените его?', '');

    if (answer_1 == '' || answer_1 == null || answer_2 == '' || answer_2 == null || answer_1.length > 50) {
            i--;
    } else {
        personalMovieDB.movies[answer_1] = answer_2;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);