import { querySel } from "./utilities.js";
import { getDataToRender } from "./GET.js";
import { currentCategoryEndpoint } from "./filterDataToRender.js";

console.log(currentCategoryEndpoint);

//**SEARCH**/
const searchBarInput = querySel(".search-bar-input");

searchBarInput.addEventListener("input", (e) => {
	const searchBarInputValue = e.target.value;
	if (searchBarInputValue) {
		if (currentCategoryEndpoint === "movie/") {
			getDataToRender("movie", "", searchBarInputValue, "search/");
		}
		if (currentCategoryEndpoint === "tv/") {
			getDataToRender("tv", "", searchBarInputValue, "search/");
		}
	}
});
