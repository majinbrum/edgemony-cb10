import { GET } from "./modules/GET.js";
import { renderData } from "./modules/renderData.js";
import { checkPageNumber } from "./modules/filterDataToRender.js";
import "./modules/filterDataToRender.js";
import "./modules/searchInput.js";
import { createListsButtons } from "./modules/createListsButtons.js";

// import { handleError } from "./modules/handleError.js";

export const currentCategoryEndpoint = "movie/";
const currentListEndpoint = "popular";

//**!FIRST FETCH!**/
const dataObject = await GET(currentCategoryEndpoint, currentListEndpoint, 1);
const dataArray = dataObject.results;
renderData(dataArray);
console.log(dataArray);

export const MAX_CURRENT_PAGES = dataObject.total_pages;
checkPageNumber(1);

export const movieLists = ["now_playing", "popular", "top_rated", "upcoming"];
export const tvSeriesLists = ["airing_today", "on_the_air", "popular", "top_rated"];

checkCurrentCategory(currentCategoryEndpoint);

export function checkCurrentCategory(currentCategoryEndpoint) {
	if (currentCategoryEndpoint === "movie/") {
		createListsButtons(movieLists);
		console.log(currentCategoryEndpoint);
	}

	if (currentCategoryEndpoint === "tv/") {
		createListsButtons(tvSeriesLists);
		console.log(currentCategoryEndpoint);
	}
}
