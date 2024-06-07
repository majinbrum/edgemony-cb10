import { API_KEY } from "./keys.js";
import { createCard } from "./modules/createCard.js";
import { appendElements, querySel } from "./modules/utilities.js";
import { handleError } from "./modules/handleError.js";

//**FETCH STUFF**/
const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${API_KEY}`,
	},
};

// "https://api.themoviedb.org/3/movie/popular?page=1"
const BASE_URL = "https://api.themoviedb.org/3/";
const endpointPopularMovies = "movie/popular";
const URLpage1 = "?page=1";
const URLpage2 = "?page=2";

//**QUERY ELEMENTS**/
const mainContainer = querySel("main");
const headerContainer = querySel("header");
console.log(headerContainer);

fetchMovies(URLpage1);

//**CHANGE PAGE**/
const btnPage1 = querySel(".btnPage1");
const btnPage2 = querySel(".btnPage2");

headerContainer.addEventListener("click", (event) => {
	switch (event.target) {
		case btnPage1:
			mainContainer.innerHTML = "";
			fetchMovies(URLpage1);
			break;

		case btnPage2:
			mainContainer.innerHTML = "";
			fetchMovies(URLpage2);
			break;

		default:
			break;
	}
});

//**FETCH**/
function fetchMovies(URLpage) {
	fetch(BASE_URL + endpointPopularMovies + URLpage, options)
		.then((response) => response.json())
		.then((data) => {
			console.log("data: ", data);
			const moviesFromDB = data.results;
			console.log("movie img: ", moviesFromDB[0].poster_path);
			moviesFromDB.forEach((singleMovieFromDB) => {
				const movieTitle = singleMovieFromDB.title;
				const movieOverview = singleMovieFromDB.overview;
				const movieReleaseDate = singleMovieFromDB.release_date;
				const moviePopularity = singleMovieFromDB.popularity;
				const movieVoteAverage = singleMovieFromDB.vote_average;
				const movieVoteCount = singleMovieFromDB.vote_count;

				//**FETCH FOR SINGLE MOVIE POSTERS**/
				fetch("https://api.themoviedb.org/3/configuration", options)
					.then((response) => response.json())
					.then((data) => {
						const imagesInfoFromDB = data.images;
						const BASE_IMG_URL = imagesInfoFromDB.base_url;
						const IMG_POSTER_SIZE = imagesInfoFromDB.poster_sizes[3];
						const IMG_POSTER_PATH = singleMovieFromDB.poster_path;
						const movieImgURL = BASE_IMG_URL + IMG_POSTER_SIZE + IMG_POSTER_PATH;

						const createdCard = createCard(movieImgURL, movieTitle, movieOverview, movieReleaseDate, moviePopularity, movieVoteAverage, movieVoteCount);
						appendElements(mainContainer, createdCard);
					});
			});
		})
		.catch((err) => {
			console.error("ERROR =>", err);
			handleError(mainContainer);
		});
}
