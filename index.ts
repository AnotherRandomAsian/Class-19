import axios from 'axios'
import { Movie } from './types'
const apiKey = '2bb9848d1b2a29d2b3ee67cefced85c0'
const apiBaseUrl = 'https://api.themoviedb.org/3'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key${apiKey}`;

const fetchData = async () => {
    const response = await axios.get(nowPlayingUrl);
    const result = response.data.results;
    const titles = result.map((movie: Movie) => movie.title);
    console.log(titles)
};
    // Excercise 2
const getMostPopularMoviesSortedByPopularity = async () => {
    const response = await axios.get(nowPlayingUrl);
    const sortedMovieTitles = response.data.results
    .sort((a: Movie, b: Movie) => b.popularity - a.popularity)
    .map((movie: Movie) => movie.title);
    console.log(sortedMovieTitles);
};
// Excercise 3
const getAveragePopularityOfMovies = async () => {
    const response = await axios.get(nowPlayingUrl);
    const averagepop = response.data.results.reduce(
        (accumulator: number, movie: Movie) => accumulator + movie.popularity,
        0,
    ) / response.data.results.length
    console.log(averagepop);
};
// Excercise 4
const getMostPopularMovie = async () => {
    const response = await axios.get(nowPlayingUrl);
    const mostpopularmovie = response.data.results.sort((a: Movie, b: Movie) => b.popularity - a.popularity)
    console.log(mostpopularmovie[0].title);
};

const getChildrenMovies = async () => {
    const response = await axios.get(nowPlayingUrl);
    const childrenMovies = response.data.results
    .filter((movie: Movie) => !movie.adult)
    .map((movie: Movie) => movie.title)
    console.log(childrenMovies)
}
const MoviesAfterMarch = async () => {
    const response = await axios.get(nowPlayingUrl);
    const result = response.data.results.filter((movie: Movie) => {
        const date = new Date(movie.release_date)
        const year = date.getFullYear()
        const month = date.getMonth()
        const isafterMarch2023 = year >= 2023 && month >= 2;
        return isafterMarch2023;
    })
}
fetchData();
getMostPopularMoviesSortedByPopularity();
getAveragePopularityOfMovies();
getMostPopularMovie();