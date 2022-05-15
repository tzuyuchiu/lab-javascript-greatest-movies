// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);
// const movies = [];
const movies = require(`./data`);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  let newMovies = movies.map(function (element) {
    //console.log("element",element.director);

    return element.director;
  });
  return newMovies;
}

console.log(getAllDirectors(movies));
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let result = movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return result.length;
}

console.log(`STEVEN SPIELBERG direct: ${howManyMovies(movies)} drama movies`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let totalScore = movies.reduce(function (preScore, currScore) {
    return preScore + currScore.score;
  }, 0);

  return totalScore / movies.length;
}

// console.log(`The average score of all the movies: ${scoresAverage(movies)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const result = movies.filter(function (movie) {
    return movie.genre.includes('Drama');
  });
  let avgDrame = result.reduce(function (preScore, currScore) {
    return preScore + currScore.score;
  }, 0);

  return avgDrame / result.length;
}

console.log(dramaMoviesScore(movies).toFixed(2));

// console.log(
//   `The averge score of all drama movies: ${scoresAverage(
//     dramaMoviesScore(movies)
//   )} is lower than the general average`
// );

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // function sorted movies by year
  const sortedByYear = (a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    } else {
      return a.year - b.year;
    }
  };

  const cloneMovies = JSON.parse(JSON.stringify(movies));
  return cloneMovies.sort(sortedByYear);
}
// clone array movies
// const cloneMovies = JSON.parse(JSON.stringify(movies));
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // function sorted movies by title
  const sortedByTitle = (a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  };
  const cloneMovieSortedTitle = JSON.parse(JSON.stringify(movies));
  cloneMovieSortedTitle.sort(sortedByTitle);
  let twentyTitleArr = cloneMovieSortedTitle.map(function (element) {
    return element.title;
  });
  return twentyTitleArr.slice(0, 20);
}

// clone array movies
// const cloneMovieSortedTitle = JSON.parse(JSON.stringify(movies));
// Take only first 20 objects from movies array
// const finalArr = orderAlphabetically(cloneMovieSortedTitle).slice(0, 20);

// print title
// finalArr.forEach((items) => console.log(items.title));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const cloneArr = JSON.parse(JSON.stringify(movies));

  cloneArr.forEach(function (element) {
    const durationString = element.duration.replace(/[^0-9]/g, '');
    let newDuration =
      parseInt(durationString[0]) * 60 +
      parseInt(durationString[1]) * 10 +
      parseInt(durationString[2]);
    element.duration = newDuration;
  });
  return cloneArr;
}
console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
