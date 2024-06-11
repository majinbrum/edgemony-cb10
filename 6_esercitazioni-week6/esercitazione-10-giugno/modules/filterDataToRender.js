import { querySel } from "./utilities.js";
import { getDataToRender } from "./GET.js";
import { MAX_CURRENT_PAGES, checkCurrentCategory } from "../script.js";
import { movieLists, tvSeriesLists } from "../script.js";

export let currentCategoryEndpoint = "movie/";
export let currentListEndpoint = "popular";
export let pageNumber = 1;

//**CHANGE PAGE**/
const btnPagesNavbar = querySel(".pages-navbar");
const btnPageBack = querySel(".page-back-btn");
const btnPageNext = querySel(".page-next-btn");

const MIN_PAGES_NUMBER = 1;

btnPagesNavbar.addEventListener("click", (e) => {
	switch (e.target) {
		case btnPageNext:
			pageNumber++;
			checkPageNumber(pageNumber);
			getDataToRender(currentCategoryEndpoint, currentListEndpoint, pageNumber);
			console.log(pageNumber);
			break;

		case btnPageBack:
			pageNumber--;
			checkPageNumber(pageNumber);
			getDataToRender(currentCategoryEndpoint, currentListEndpoint, pageNumber);
			console.log(pageNumber);
			break;
	}
});

export function checkPageNumber(pageNumber) {
	const isPageMax = pageNumber === MAX_CURRENT_PAGES;
	const isPageMin = pageNumber === MIN_PAGES_NUMBER;

	btnPageNext.style.visibility = isPageMax ? "hidden" : "visible";
	btnPageBack.style.visibility = isPageMin ? "hidden" : "visible";
}

//**CHANGE LIST**//
const btnListsNavbar = querySel(".btn-lists-navbar");

btnListsNavbar.addEventListener("click", (e) => {
	if (e.target.className === "movie-list-btn") {
		pageNumber = 1;
		checkPageNumber(pageNumber);
		currentListEndpoint = e.target.id;
		getDataToRender(currentCategoryEndpoint, currentListEndpoint, pageNumber);
	}
});

//**CHANGE CATEGORY**//
const btnCategoriesNavbar = querySel(".btn-categories-navbar");

btnCategoriesNavbar.addEventListener("click", (e) => {
	if (e.target.className === "category-btn") {
		pageNumber = 1;
		checkPageNumber(pageNumber);
		currentCategoryEndpoint = e.target.id;
		checkCurrentCategory(currentCategoryEndpoint);

		if (currentCategoryEndpoint === "movie/") {
			currentListEndpoint = movieLists[0];
		}

		if (currentCategoryEndpoint === "tv/") {
			currentListEndpoint = tvSeriesLists[0];
		}

		getDataToRender(currentCategoryEndpoint, currentListEndpoint, pageNumber);
	}
});
