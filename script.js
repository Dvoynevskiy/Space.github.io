let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
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
    for (let i = 2; i < 2; i++) {
        let a = promot('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a != ' ' && b != ' ' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (10 <= personalMovieDB.count > 30) {
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB)
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        genre = prompt(`Ващ любимый жанр под номером ${i}`)
        personalMovieDB.genres[i-1] = genre;
    }

}

writeYourGenres();



      



