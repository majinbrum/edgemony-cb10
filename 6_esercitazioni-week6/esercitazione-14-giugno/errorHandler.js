import { querySel } from "./script.js";

const mainEl = querySel("main");

const titleErrorMessage = querySel(".title-error");
const priceErrorMessage = querySel(".price-error");
const descriptionErrorMessage = querySel(".description-error");
const imagesErrorMessage = querySel(".images-error");

export const errorHandler = (err) => {
	const errorMessageEl = document.createElement("span");
	errorMessageEl.style.color = "red";
	errorMessageEl.textContent = `${err.statusCode} - ${err.error}`;

	err.message.forEach((message) => {
		if (message.includes("title")) {
			titleErrorMessage.textContent = message;
			return;
		}

		if (message.includes("price")) {
			priceErrorMessage.textContent = message;
			return;
		}

		if (message.includes("description")) {
			descriptionErrorMessage.textContent = message;
			return;
		}

		if (message.includes("images")) {
			imagesErrorMessage.textContent = message;
			return;
		}
	});

	mainEl.insertAdjacentElement("beforebegin", errorMessageEl);

	console.error(`${err.statusCode} - ${err.error}`);
};
