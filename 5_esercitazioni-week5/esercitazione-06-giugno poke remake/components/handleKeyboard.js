import { renderSearchPage } from "./renderSearchPage.js";
import { renderMyPokedex, addToMyPokedex } from "./renderMyPokedex.js";
import { handlePokeball } from "./createPokedexLi.js";
import { renderMainPage } from "../script.js";
const pokedexMainDiv = document.querySelector(".pokedex-main");
const title = document.querySelector("h1");

let count = -1;
export const handleKeyboardMain = (e) => {
	const pokedexListElements = Array.from(pokedexMainDiv.childNodes);
	pokedexListElements.forEach((pokedexListEl) => {
		const listArrowClassList = pokedexListEl.firstChild.classList;
		if (listArrowClassList.contains("select")) {
			listArrowClassList.remove("select");
		}
	});

	switch (e.key) {
		case "ArrowUp":
			if (count > 0) {
				--count;
				pokedexListElements[count].firstChild.classList.add("select");
				pokedexListElements[count].scrollIntoView({
					behavior: "smooth",
				});
				if (count > 1) {
					pokedexListElements[count - 1].scrollIntoView({
						behavior: "smooth",
					});
				}
			} else {
				count = 0;
				pokedexListElements[count].firstChild.classList.add("select");
			}
			break;

		case "ArrowDown":
			if (count < pokedexListElements.length - 1) {
				++count;
				pokedexListElements[count].firstChild.classList.add("select");
				pokedexListElements[count].scrollIntoView({
					behavior: "smooth",
				});
				if (count > 1) {
					pokedexListElements[count - 1].scrollIntoView({
						behavior: "smooth",
					});
				}
			} else {
				count = pokedexListElements.length - 1;
				pokedexListElements[count].firstChild.classList.add("select");
			}
			break;

		case "b":
			if (title.textContent === "POKéDEX") {
				renderSearchPage();
				count = -1;
				document.removeEventListener("keydown", handleKeyboardMain);
			} else {
				// renderPokemonDetails
				count = -1;
				document.removeEventListener("keydown", handleKeyboardMain);
			}

			break;

		case "a":
			pokedexListElements[count].firstChild.classList.add("select");

			const currentPokemonName = pokedexListElements[count].dataset.name;
			addToMyPokedex(currentPokemonName);

			const pokeBall = pokedexListElements[count].childNodes[2];
			handlePokeball(pokeBall);
			break;

		case "ArrowLeft":
		case "ArrowRight":
			if (title.textContent === "POKéDEX") {
				renderMyPokedex();
			} else {
				renderMainPage();
			}
			break;

		default:
			console.log(e.key);
			break;
	}
};
