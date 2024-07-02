import { renderPokedex } from "../script.js";
import { handleKeyboardMain } from "./handleKeyboard.js";
import { renderFooterButtons } from "./renderFooterButtons.js";
import { GETpokemon } from "./GET.js";

export let myPokedex = localStorage.getItem("myPokedex") ? localStorage.getItem("myPokedex") : localStorage.setItem("myPokedex", []);
// Parse the array
myPokedex = myPokedex ? JSON.parse(myPokedex) : [];

export const addToMyPokedex = async (myPokemonName) => {
	const isAdded = myPokedex.some((myPokemon) => myPokemon.name.includes(myPokemonName));
	if (isAdded) {
		const indexToRemove = myPokedex.findIndex((pokemon) => pokemon === myPokemonName);
		myPokedex.splice(indexToRemove, 1);
	} else if (!isAdded) {
		// Push the new element into the array
		let pokemonToAdd = await GETpokemon(myPokemonName);
		handlePokemonToAdd(pokemonToAdd);
		myPokedex.push(pokemonToAdd);
	}

	// Store the updated array back into local storage
	localStorage.setItem("myPokedex", JSON.stringify(myPokedex.sort((a, b) => a.id - b.id)));
	console.log(myPokedex);
};

const footerButtons = [
	{ src: "./img/horizontal-arrows.png", alt: "Left/right arrows button", title: "Pokedex" },
	{ src: "./img/b-btn.png", alt: "B button", title: "Dettagli" },
	{ src: "./img/vertical-arrows.png", alt: "Top/bottom arrows button", title: "Naviga" },
	{ src: "./img/a-btn.png", alt: "A button", title: "OK" },
];

const title = document.querySelector("h1");
export const renderMyPokedex = () => {
	title.textContent = "MyPokedex";
	renderFooterButtons(footerButtons);
	document.addEventListener("keydown", handleKeyboardMain);

	renderPokedex(myPokedex);
};

// (localStorage.getItem("user")
// localStorage.setItem("user", userNameInput.value);
// localStorage.removeItem("user");

const handlePokemonToAdd = (pokemonToAdd) => {
	pokemonToAdd = {
		abilities: pokemonToAdd.abilities,
		height: pokemonToAdd.height,
		id: pokemonToAdd.id,
		name: pokemonToAdd.name,
		moves: filterMovesByVersion(pokemonToAdd),
		// nature: naturesPokemon,
		sprites: {
			front_default: pokemonToAdd.sprites.front_default,
			front_gif: pokemonToAdd.sprites.other.showdown.front_default,
		},
		types: pokemonToAdd.types,
		weight: pokemonToAdd.weight,
	};
	console.log(pokemonToAdd);
};

const filterMovesByVersion = (pokemonToAdd) => {
	pokemonToAdd.moves.forEach((moveInfo) => {
		const versionGroupDetails = Array.from(moveInfo.version_group_details);
		versionGroupDetails.some((versionGroup) => {
			if (versionGroup.version_group.name.includes("leafgreen")) {
				console.log(moveInfo.move.name, versionGroup.version_group.name);
				return moveInfo.move.name;
			}
		});
	});
};
