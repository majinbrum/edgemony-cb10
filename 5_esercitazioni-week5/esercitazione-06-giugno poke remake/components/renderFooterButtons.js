import { createEl } from "./utilities.js";

const pokedexFooterDiv = document.querySelector(".pokedex-footer");

export const renderFooterButtons = (buttonsArray) => {
	pokedexFooterDiv.innerHTML = "";
	buttonsArray.map((singleButton) => {
		const btnDiv = createEl("div", {}, pokedexFooterDiv);
		const btnImgDiv = createEl("div", { className: "footer-btn" }, btnDiv);
		createEl("img", { src: singleButton.src, alt: singleButton.alt }, btnImgDiv);
		createEl("h5", { textContent: singleButton.title }, btnDiv);
	});
};
