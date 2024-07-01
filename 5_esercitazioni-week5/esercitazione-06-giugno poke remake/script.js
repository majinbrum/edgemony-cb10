import { GETpokedex, GETpokemon } from "./GET.js";
import { createPokedexLi } from "./components/createPokedexLi.js";
import { renderFooterButtons } from "./components/renderFooterButtons.js";
import { handleKeyboardMain } from "./components/handleKeyboardMain.js";

const getPokedexData = async (filterName, filterType1, filterType2) => {
	const pokemonEntries = await GETpokedex();

	// Create an array of promises for fetching each Pokemon's data
	const pokemonPromises = pokemonEntries.map((pokemon) => {
		const pokemonName = pokemon.pokemon_species.name;
		return GETpokemon(pokemonName);
	});

	let pokedex = await Promise.all(pokemonPromises);
	if (filterName) {
		pokedex = pokedex.filter((pokemon) => pokemon.name.includes(filterName));
	}
	if (filterType1) {
		pokedex = pokedex.filter((pokemon) => pokemon.types.some((type) => type.type.name.includes(filterType1)));
	}
	if (filterType2) {
		pokedex = pokedex.filter((pokemon) => pokemon.types.some((type) => type.type.name.includes(filterType2)));
	}
	return pokedex;
};

const pokedexMainDiv = document.querySelector(".pokedex-main");
const renderPokedex = async (pokedex) => {
	pokedexMainDiv.innerHTML = "";
	pokedex.forEach((pokemon) => createPokedexLi(pokemon));
};

export const renderMainPage = async (filterName, filterType1, filterType2) => {
	const pokedex = await getPokedexData(filterName, filterType1, filterType2);
	// console.log(pokedex);
	renderPokedex(pokedex);

	const footerButtons = [
		{ src: "./img/b-btn.png", alt: "B button", title: "Ricerca" },
		{ src: "./img/arrows-btn.png", alt: "Arrows button", title: "Scegli" },
		{ src: "./img/a-btn.png", alt: "A button", title: "OK" },
	];
	renderFooterButtons(footerButtons);

	document.addEventListener("keydown", handleKeyboardMain);
};

renderMainPage();
