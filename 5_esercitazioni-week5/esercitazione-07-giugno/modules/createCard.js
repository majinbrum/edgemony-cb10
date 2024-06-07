import { createEl, setClassList, appendElements } from "./utilities.js";

export const createCard = (movieImgURL, movieTitle, movieOverview, moviePopularity, movieVoteAverage, movieVoteCount) => {
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
	const moviePopularityEl = createEl("p");
	moviePopularityEl.innerHTML = `<strong>Release date:</strong> ${moviePopularity}`;
	const movieVoteEl = createEl("p");
	movieVoteEl.innerHTML = `<strong>Average vote:</strong> ${movieVoteAverage}/${movieVoteCount}`;

	appendElements(movieOtherInfoDiv, moviePopularityEl, movieVoteEl);

	appendElements(movieContentDiv, movieInfoDiv, movieOtherInfoDiv);

	appendElements(movieCard, movieImgDiv, movieContentDiv);
	return movieCard;
};
