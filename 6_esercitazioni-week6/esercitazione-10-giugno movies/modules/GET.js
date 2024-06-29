import { API_KEY } from "../keys.js";
import { renderData } from "./renderData.js";

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

export const GET = async (categoryEndpoint = "movie/", listEndpoint = "popular", page = 1, searchFilter = "") => {
	let queryType;
	if (searchFilter) {
		queryType = "query";
	} else {
		queryType = "page";
	}

	const response = await fetch(`${BASE_URL}${searchFilter}${categoryEndpoint}${listEndpoint}?${queryType}=${page}`, options);
	const data = await response.json();

	return data;
};

export const getDataToRender = async (categoryEndpoint, listEndpoint, page, searchFilter) => {
	const dataObject = await GET(categoryEndpoint, listEndpoint, page, searchFilter);
	const dataArray = dataObject.results;
	renderData(dataArray);
	return dataObject;
};
