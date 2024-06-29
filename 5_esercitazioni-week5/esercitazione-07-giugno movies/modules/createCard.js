import { createEl, setClassList, appendElements } from "./utilities.js";

export const createCard = (movieImgConfiguration, singleMovieFromDB) => {
	//**HANDLE**//
	const movieTitle = singleMovieFromDB.title;
	const movieOverview = singleMovieFromDB.overview;
	const movieReleaseDate = singleMovieFromDB.release_date;
	const moviePopularity = singleMovieFromDB.popularity;
	const movieVoteCount = singleMovieFromDB.vote_count;
	const movieVoteAverage = Math.round(singleMovieFromDB.vote_average * 10) / 10;

	const IMG_PATH = getImagePathBasedOnMedia(singleMovieFromDB);
	const movieImgURL = movieImgConfiguration + IMG_PATH;

	//**CREATE**//
	const movieCard = createEl("div");
	setClassList(movieCard, "movie-card");

	const movieImgDiv = createEl("div");
	setClassList(movieImgDiv, "movie-img");
	const movieImgEl = createEl("img");
	movieImgEl.src = movieImgURL;
	appendElements(movieImgDiv, movieImgEl);

	const movieContentDiv = createEl("div");
	setClassList(movieContentDiv, "movie-content");
	const movieInfoDiv = createEl("div");
	const movieTitleEl = createEl("h2");
	movieTitleEl.textContent = movieTitle;
	const movieOverviewEl = createEl("p");
	movieOverviewEl.textContent = movieOverview;
	appendElements(movieInfoDiv, movieTitleEl, movieOverviewEl);

	const movieOtherInfoDiv = createEl("div");
	const movieReleaseDateEl = createEl("p");
	movieReleaseDateEl.innerHTML = `<strong>Release date:</strong> ${movieReleaseDate}`;
	const moviePopularityEl = createEl("p");
	moviePopularityEl.innerHTML = `<strong>Popularity:</strong> ${moviePopularity}`;
	const movieVoteEl = createEl("p");
	movieVoteEl.innerHTML = `<strong>Average vote:</strong> ${movieVoteAverage} based on ${movieVoteCount} votes`;
	appendElements(movieOtherInfoDiv, movieReleaseDateEl, moviePopularityEl, movieVoteEl);

	appendElements(movieContentDiv, movieInfoDiv, movieOtherInfoDiv);
	appendElements(movieCard, movieImgDiv, movieContentDiv);
	return movieCard;
};

function getImagePathBasedOnMedia(singleMovieFromDB) {
	let jsMediaSize = window.matchMedia("(max-width: 1745px)").matches;

	if (jsMediaSize) {
		return singleMovieFromDB.backdrop_path;
	} else {
		return singleMovieFromDB.poster_path;
	}
}
