import { API_KEY } from "./keys.js";
import { createCard } from "./modules/createCard.js";
import { appendElements, querySel } from "./modules/utilities.js";
// import { handleError } from "./modules/handleError.js";

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

//**CHANGE CATEGORY**/
const btnPopularMovies = querySel(".popular-movies-btn");
const btnTopRatedMovies = querySel(".top-rated-btn");

//**SEARCH**/
const searchBarInput = querySel(".search-bar-input");

//**CHANGE PAGE**/
const btnPage1 = querySel(".page-1-btn");
const btnPage2 = querySel(".page-2-btn");

// headerContainer.addEventListener("click", (event) => {
// 	switch (event.target) {
// 		case btnPopularMovies:
// 			fetchMovies(endpointPopularMovies, URLpage1);
// 			break;

// 		case btnTopRatedMovies:
// 			fetchMovies(endpointTopRatedMovies, URLpage1);
// 			break;

// 		case btnPage1:
// 			fetchMovies(endpointPopularMovies, URLpage1);
// 			break;

// 		case btnPage2:
// 			fetchMovies(endpointPopularMovies, URLpage2);
// 			break;

// 		default:
// 			console.log("ups!");
// 	}
// });

//**FETCH**/
// function fetchMovies(movieCategory, URLpage) {
// 	fetch(BASE_URL + movieCategory + URLpage, options)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			const moviesFromDB = data.results;
// 			mainContainer.innerHTML = "";

// 			moviesFromDB.forEach((singleMovieFromDB) => {
// 				const createdSingleCard = createCard(singleMovieFromDB);
// 				appendElements(mainContainer, createdSingleCard);
// 			});
// 		})
// 		.catch((err) => {
// 			console.error("ERROR =>", err);
// 			// handleError(mainContainer);
// 		});
// }

let pageNumber = 1;

const GET = async (pageNumber) => {
	const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${pageNumber}`, options);
	const data = await response.json();

	return data;
};

//**!FIRST FETCH!**/

const fetchData = async (pageNumber) => {
	const dataArray = await GET(pageNumber);
	const moviesData = dataArray.results;
	renderList(moviesData);
};

const renderList = (moviesData) => {
	mainContainer.innerHTML = "";

	moviesData.forEach((singleMovieFromDB) => {
		const createdSingleCard = createCard(singleMovieFromDB);
		appendElements(mainContainer, createdSingleCard);
	});
};

//**PAGES**/
const btnPagesNavbar = querySel(".pages-navbar");
const btnPageBack = querySel(".page-back-btn");
const btnPageNext = querySel(".page-next-btn");

btnPagesNavbar.addEventListener("click", (e) => {
	if (e.target === btnPageNext) {
		pageNumber++;
	}

	if (e.target === btnPageBack) {
		pageNumber--;
	}

	console.log(pageNumber);
	fetchData(pageNumber);
});

fetchData(pageNumber);
