import { renderSearchPage } from "./renderSearchPage.js";
const pokedexMainDiv = document.querySelector(".pokedex-main");

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
			renderSearchPage();
			count = -1;
			document.removeEventListener("keydown", handleKeyboardMain);
			break;

		case "a":
			pokedexListElements[count].firstChild.classList.add("select");
			console.log(pokedexListElements[count].dataset.name);
			break;

		default:
			break;
	}
};
