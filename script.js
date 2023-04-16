'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let answer_1 = prompt('Один из последних просмотренных фильмов?', ''),
                answer_2 = prompt('На сколько оцените его?', '');
        
            if (answer_1 == '' || answer_1 == null || answer_2 == '' || answer_2 == null || answer_1.length > 50) {
                    i--;
            } else {
                personalMovieDB.movies[answer_1] = answer_2;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');

            if (personalMovieDB.genres[i] === '' || personalMovieDB.genres[i] === null) {
                i--;
            }
        }

        personalMovieDB.genres.forEach(function(genre, i) {
            console.log(`Любимый жанр ${i+1} - это ${genre}`);
        });
    }
};
















