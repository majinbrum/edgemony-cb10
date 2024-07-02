import { createEl } from "./utilities.js";
import { addToMyPokedex } from "./renderMyPokedex.js";
import { myPokedex } from "./renderMyPokedex.js";

const pokedexMainDiv = document.querySelector(".pokedex-main");

export const createPokedexLi = (pokemon) => {
	const pokedexLi = createEl("div", { className: "pokedex-li", "data-name": pokemon.name }, pokedexMainDiv);

	createEl("span", { className: "list-arrow", innerHTML: "&#x1F782" }, pokedexLi);

	const pokemonNumberEl = createEl("h3", { textContent: "N°" }, pokedexLi);
	const pokemonNumberSpanEl = createEl("span", {}, pokemonNumberEl);
	switch (`${pokemon.id}`.length) {
		case 1:
			pokemonNumberSpanEl.textContent = `00${pokemon.id}`;
			break;
		case 2:
			pokemonNumberSpanEl.textContent = `0${pokemon.id}`;
			break;
		default:
			pokemonNumberSpanEl.textContent = pokemon.id;
			break;
	}

	const pokeBall = createEl("img", { className: "pokeball", src: "./img/pokeball.png", alt: "Pokéball image", width: "20", height: "20", loading: "lazy" }, pokedexLi);

	const isAdded = myPokedex.some((myPokemon) => myPokemon.name.includes(pokemon.name));
	if (isAdded) {
		pokeBall.classList.add("added");
	} else {
		pokeBall.classList.remove("added");
	}

	createEl("h2", { className: "pokemon-name", textContent: pokemon.name }, pokedexLi);

	createEl("div", { className: "pokemon-icon" }, pokedexLi);
	createEl("img", { src: pokemon.sprites.front_default, alt: `${pokemon.name} icon`, width: "100", height: "100", loading: "lazy" }, pokedexLi);

	const pokemonTypesDiv = createEl("div", { className: "pokemon-types" }, pokedexLi);
	pokemon.types.forEach((pokemonSingleType) => {
		createEl("h4", { textContent: pokemonSingleType.type.name, classList: `pokemon-type ${pokemonSingleType.type.name}` }, pokemonTypesDiv);
	});

	pokeBall.addEventListener("click", function () {
		addToMyPokedex(pokemon.name, pokeBall);
		pokeBall.classList.toggle("added");
	});

	pokeBall.addEventListener("mouseover", function () {
		handlePokeball(pokeBall);
	});

	pokeBall.addEventListener("mouseleave", function () {
		handlePokeball(pokeBall);
	});
};

export const handlePokeball = (pokeBall) => {
	if (pokeBall.classList.contains("added")) {
		pokeBall.classList.remove("added");
	} else {
		pokeBall.classList.add("added");
	}
};
