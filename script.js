/*jshint esversion: 6 */

const personalMovieDB = {
    count: 0,
    movies: {}, 
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    rememberMyFilms: () => {
        for (let i = 2; i < 2; i++) {
            let a = promot('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null || b != null || a != ' ' || b != ' ' || a.length < 50 || b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel:() => {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (10 <= personalMovieDB.count > 30) {
            console.log("Вы классический зритель");
        } else if(personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
        
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:() => {
        let 
        for (let i = 1; i < 4; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
            if (genres === null || genres === ' ') {
                console.log('Вы ввели некорректные данные или не ввели хи вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
    
};




      



