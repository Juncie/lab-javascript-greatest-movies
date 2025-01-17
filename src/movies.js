// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  let directorNames = array.map((eachMovie) => {
    return eachMovie.director;
  });
  return directorNames;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let stevenMovies = array.filter((eachMovie) => {
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
  })
  return stevenMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {

  let sum = array.reduce((acc, val) => {
    return acc + val.score;
  }, 0);

  let avg = sum / array.length
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  let dramaMovies = arr.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama');
  })

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  return arr.sort((a, b) => {
    return a.year - b.year
  })
}

const orderAlphabetically = (array) => array.sort((a,b)=> a.title.localeCompare(b.title)).slice(0,20)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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