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
const endpointTopRatedMovies = "movie/top_rated";
const URLpage1 = "?page=1";
const URLpage2 = "?page=2";

//**QUERY ELEMENTS**/
const mainContainer = querySel("main");
const headerContainer = querySel("header");

//**!FIRST FETCH!**/
fetchMovies(endpointPopularMovies, URLpage1);

//**CHANGE CATEGORY**/
const btnPopularMovies = querySel(".popular-movies-btn");
const btnTopRatedMovies = querySel(".top-rated-btn");

//**SEARCH**/
const searchBarInput = querySel(".search-bar-input");

//**CHANGE PAGE**/
const btnPage1 = querySel(".page-1-btn");
const btnPage2 = querySel(".page-2-btn");

headerContainer.addEventListener("click", (event) => {
	switch (event.target) {
		case btnPopularMovies:
			fetchMovies(endpointPopularMovies, URLpage1);
			break;

		case btnTopRatedMovies:
			fetchMovies(endpointTopRatedMovies, URLpage1);
			break;

		case btnPage1:
			fetchMovies(endpointPopularMovies, URLpage1);
			break;

		case btnPage2:
			fetchMovies(endpointPopularMovies, URLpage2);
			break;

		default:
			console.log("ups!");
	}
});

//**FETCH**/
function fetchMovies(movieCategory, URLpage) {
	fetch(BASE_URL + movieCategory + URLpage, options)
		.then((response) => response.json())
		.then((data) => {
			// console.log("data: ", data);
			const moviesFromDB = data.results;
			// console.log("movie img: ", moviesFromDB[0].poster_path);
			moviesFromDB.forEach((singleMovieFromDB) => {
				fetchMoviesImg(singleMovieFromDB);
			});
			//**SEARCH**/
			searchBarInput.addEventListener("input", function () {
				// console.log(this.value.toLowerCase());
				const inputValue = this.value.toLowerCase();
				filterMovies(inputValue, moviesFromDB);
			});
		})
		.catch((err) => {
			console.error("ERROR =>", err);
			handleError(mainContainer);
		});

	//**SEARCH**/
	function filterMovies(inputValue, moviesFromDB) {
		const filteredMovies = moviesFromDB.filter((singleMovieFromDB) => singleMovieFromDB.title.toLowerCase().includes(inputValue));
		console.log(filteredMovies);
		filteredMovies.forEach((singleFilteredMovie) => {
			fetchMoviesImg(singleFilteredMovie);
		});
	}
}

//**FETCH FOR SINGLE MOVIE POSTERS**/
function fetchMoviesImg(singleMovie) {
	mainContainer.innerHTML = "";

	fetch("https://api.themoviedb.org/3/configuration", options)
		.then((response) => response.json())
		.then((data) => {
			const imagesInfoFromDB = data.images;
			// console.log(imagesInfoFromDB);
			const BASE_IMG_URL = imagesInfoFromDB.base_url;

			const IMG_SIZE = getImageSizeBasedOnMedia(imagesInfoFromDB);
			const movieImgConfiguration = BASE_IMG_URL + IMG_SIZE;

			const createdSingleCard = createCard(movieImgConfiguration, singleMovie);
			appendElements(mainContainer, createdSingleCard);
		});
}

function getImageSizeBasedOnMedia(imagesInfoFromDB) {
	let jsMediaSize = window.matchMedia("(max-width: 1745px)").matches;

	if (jsMediaSize) {
		return imagesInfoFromDB.backdrop_sizes[1];
	} else {
		return imagesInfoFromDB.poster_sizes[5];
	}
}
