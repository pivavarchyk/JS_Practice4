/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

/* const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(), //trim() убирает пробелы в начале в конце строки
                  b = prompt('На сколько оцените его?', '')
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b
                console.log('done')
            } else {
                console.log('error')
                i--
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {

        for (let i = 1; i <= 3; i++) {

            let movieGenre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (movieGenre == null || movieGenre === '') {
                console.log('error')
                i--
            } else {
                personalMovieDB.genres[i- 1] = movieGenre
            }
        }

        personalMovieDB.genres.forEach( function(item, i) {
            console.log(`Любимый жанр ${i + 1} - это ${item}\n`)
        })
    }
}

personalMovieDB.start()
personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel()
personalMovieDB.writeYourGenres()
personalMovieDB.toggleVisibleMyDB()
personalMovieDB.toggleVisibleMyDB()
personalMovieDB.showMyDB()


//Exercise 13

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let totalS = 0
    data.shops.forEach((item) => {totalS += item.width*item.length})
    let totalV = totalS*data.height
    let budgetNeed = totalV*data.moneyPer1m3

    console.log(`Общий отапливаемый объем - ${totalV} м3`)
    console.log(`Общая стоимость отопления - ${budgetNeed} р`)

    if (budgetNeed <= data.budget)  {console.log('Бюджета достаточно!')} else {console.log('Бюджета не достаточно!')}
    
}

isBudgetEnough(shoppingMallData) */

//Exercise14

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort()
    const a = [], b = [], c = [], rest = []

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i])
        }
        else if (i < 6) {
            b.push(arr[i])
        }
        else if (i < 9) {
            c.push(arr[i])
        }
        else {
            rest.push(arr[i])
        }
    }
        
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students))
