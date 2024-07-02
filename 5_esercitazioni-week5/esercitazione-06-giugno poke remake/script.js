import { GETpokedex, GETpokemon } from "./components/GET.js";
import { createPokedexLi } from "./components/createPokedexLi.js";
import { renderFooterButtons } from "./components/renderFooterButtons.js";
import { handleKeyboardMain } from "./components/handleKeyboard.js";

const getPokedexData = async (filterName, filterType1, filterType2) => {
	const pokemonEntries = await GETpokedex();

	// Create an array of promises for fetching each Pokemon's data
	const pokemonPromises = pokemonEntries.map((pokemon) => {
		const pokemonName = pokemon.pokemon_species.name;
		return GETpokemon(pokemonName);
	});

	let pokedex = await Promise.all(pokemonPromises);

	// Apply all filters in a single filter method to avoid multiple iterations
	pokedex = pokedex.filter((pokemon) => {
		const matchesName = filterName ? pokemon.name.includes(filterName) : true;
		const matchesType1 = filterType1 ? pokemon.types.some((type) => type.type.name.includes(filterType1)) : true;
		const matchesType2 = filterType2 ? pokemon.types.some((type) => type.type.name.includes(filterType2)) : true;

		return matchesName && matchesType1 && matchesType2;
	});
	return pokedex;
};

const pokedexMainDiv = document.querySelector(".pokedex-main");
export const renderPokedex = (pokedex) => {
	pokedexMainDiv.innerHTML = "";
	pokedex.forEach((pokemon) => createPokedexLi(pokemon));
};

export const footerButtons = [
	{ src: "./img/horizontal-arrows.png", alt: "Left/right arrows button", title: "MyPokedex" },
	{ src: "./img/b-btn.png", alt: "B button", title: "Ricerca" },
	{ src: "./img/vertical-arrows.png", alt: "Top/bottom arrows button", title: "Naviga" },
	{ src: "./img/a-btn.png", alt: "A button", title: "OK" },
];

const title = document.querySelector("h1");

export const renderMainPage = async (filterName, filterType1, filterType2) => {
	title.textContent = "POKéDEX";
	renderFooterButtons(footerButtons);
	document.addEventListener("keydown", handleKeyboardMain);

	const pokedex = await getPokedexData(filterName, filterType1, filterType2);
	renderPokedex(pokedex);
};

renderMainPage();

const naturesPokemon = [
	"Hardy",
	"Lonely",
	"Brave",
	"Adamant",
	"Naughty",
	"Bold",
	"Docile",
	"Relaxed",
	"Impish",
	"Lax",
	"Timid",
	"Hasty",
	"Serious",
	"Jolly",
	"Naive",
	"Modest",
	"Mild",
	"Quiet",
	"Bashful",
	"Rash",
	"Calm",
	"Gentle",
	"Sassy",
	"Careful",
	"Quirky",
];
