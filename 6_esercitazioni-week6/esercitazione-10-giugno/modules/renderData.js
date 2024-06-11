import { createCard } from "./createCard.js";
import { appendElements, querySel } from "./utilities.js";

const mainContainer = querySel("main");

export const renderData = (dataArray) => {
	mainContainer.innerHTML = "";

	dataArray.forEach((singleObjectFromDB) => {
		const createdSingleCard = createCard(singleObjectFromDB);
		appendElements(mainContainer, createdSingleCard);
	});
};
