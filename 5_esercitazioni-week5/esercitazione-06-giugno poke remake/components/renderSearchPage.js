import { GETtypes } from "./GET.js";
import { renderMainPage } from "../script.js";
import { createEl } from "./utilities.js";
import { renderFooterButtons } from "./renderFooterButtons.js";

const footerButtons = [
	{ src: "./img/arrows-btn.png", alt: "Arrows button", title: "Scegli" },
	{ src: "./img/a-btn.png", alt: "A button", title: "OK" },
];

const pokedexMainDiv = document.querySelector(".pokedex-main");
const pokedexFooterDiv = document.querySelector(".pokedex-footer");

export const renderSearchPage = async () => {
	pokedexMainDiv.innerHTML = "";
	pokedexFooterDiv.innerHTML = "";
	renderFooterButtons(footerButtons);

	const searchDiv = createEl("div", { className: "search-div" }, pokedexMainDiv);
	const searchNameDiv = createEl("div", { className: "search-name-div" }, searchDiv);
	createEl("label", { for: "name", className: "search-name", textContent: "Nome" }, searchNameDiv);
	const searchNameInput = createEl("input", { name: "name", className: "search-name-input", type: "text" }, searchNameDiv);

	const searchTypeDiv = createEl("div", { className: "search-type-div" }, searchDiv);
	createEl("label", { for: "types", className: "search-types", textContent: "Tipo" }, searchTypeDiv);
	const selectTypeInput1 = createEl("select", { name: "types1", className: "search-type-input" }, searchTypeDiv);
	const selectTypeInput2 = createEl("select", { name: "types2", className: "search-type-input" }, searchTypeDiv);
	createEl("option", { value: "", textContent: "Tutti" }, selectTypeInput1);
	createEl("option", { value: "", textContent: "Tutti" }, selectTypeInput2);
	const allTypes = await GETtypes();
	allTypes.map((type) => createEl("option", { value: type, textContent: type }, selectTypeInput1));
	allTypes.map((type) => createEl("option", { value: type, textContent: type }, selectTypeInput2));

	const searchBtn = createEl("button", { className: "search-btn", textContent: "Vai" }, searchDiv);
	searchBtn.addEventListener("click", () => {
		renderFilteredPokedex(searchNameInput, selectTypeInput1, selectTypeInput2);
	});
};

export const renderFilteredPokedex = (searchNameInput, selectTypeInput1, selectTypeInput2) => {
	const pokemonName = searchNameInput.value;
	const pokemonType1 = selectTypeInput1.value;
	const pokemonType2 = selectTypeInput2.value;
	renderMainPage(pokemonName, pokemonType1, pokemonType2);
};
