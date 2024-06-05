// TODO 0: importo il modulo pokemon.js
import { pokemon, pokemonTypes } from "./data/pokemon.js";
import { cardElGen, cardListGen, buttonGen } from "./modules/components-ema.js";

/***************************************************************/

// TODO 4: preparo un nuovo pokémon da aggiungere tramite un tasto "add Pokémon"
const newPokemon = {
	id: 10,
	name: "Caterpie",
	type: "coleottero",
	image: "https://media.pokemoncentral.it/wiki/thumb/b/b7/Artwork0010_RFVF.png/200px-Artwork0010_RFVF.png",
};

/***************************************************************/

// TODO 1: creo la lista e la inserisco dentro in main
const mainSectionEl = document.querySelector(".main");

// TODO 5: prendo il button per aggiungere un Pokémon
const btnAdd = document.querySelector(".btn-add");

/***************************************************************/

// TODO 8: prendo l'header
const headerElement = document.querySelector(".header");

// TODO 9: creo una funzione per creare i button per filtrare per tipo
const renderListTypes = () => {
	return pokemonTypes.forEach((type) => {
		const btnTypeFilter = buttonGen(`Type - ${type}`, type);
		headerElement.append(btnTypeFilter);

		btnTypeFilter.addEventListener("click", function () {
			const pokemonFiltered = pokemon.filter((singlePokemon) => singlePokemon.type === this.id);
			console.log(pokemonFiltered.length ? pokemonFiltered : "Non ci sono pokemon di questo tipo");

			mainSectionEl.append(renderListCard(pokemonFiltered));
		});
	});
};

/***************************************************************/

// TODO 7: do un nome alle operazioni che mi permetto di rileggere l'array pokemon
const renderListCard = (pokemonArray) => {
	// Svuotiamo il contenuto dell'elemento mainSectionEl per evitare duplicati
	// Attenzione: ho scelto questa soluzione per ridurre al minimo le operazioni da scrivere ed eseguire sul DOM
	mainSectionEl.innerHTML = "";

	// Generiamo un nuovo elemento lista delle card
	const cardList = cardListGen();

	/*
	// TODO 2: generare tante card, quanti sono i pokémon contenuti nella lista
	// for (let i = 0; i <= pokemon.length - 1; i++){
	for (let i = 0; i < pokemon.length; i++) {
		const cardEl = cardElGen(pokemon[i]); // Creiamo una card per il Pokémon corrente
		cardList.append(cardEl); // Aggiungiamo la card alla lista
	}
*/

	// TODO 2: riscritto con il forEach metodo degli array
	pokemonArray.forEach((singlePokemon) => {
		const cardEl = cardElGen(singlePokemon);
		cardList.append(cardEl);
	});

	// Restituiamo la lista delle card
	return cardList;
};

/***************************************************************/

// TODO 3: voglio che la card list venga generata dentro alla main section al "onload" della pagina
(window.onload = mainSectionEl.append(renderListCard(pokemon))), renderListTypes();

/***************************************************************/

// TODO 6: Aggiungiamo un listener per il click del bottone btnAdd
btnAdd.addEventListener("click", function () {
	const isPokemonInArray = pokemon.some((i) => i.id === newPokemon.id);
	if (isPokemonInArray) {
		console.log("Il pokemon esiste già! ", isPokemonInArray);
		console.log("Il pokemon che volevi aggiungere era: ", newPokemon);
	} else {
		console.log("Il pokemon non esiste ancora. ", isPokemonInArray);
		console.log("Il nuovo pokemon è: ", newPokemon);

		// Aggiungiamo il nuovo Pokémon all'array dei Pokémon
		pokemon.push(newPokemon);

		// Resettiamo il contenuto dell'elemento mainSectionEl e aggiorniamo la visualizzazione delle card (per evitare duplicati delle card già esistenti)
		mainSectionEl.append(renderListCard(pokemon));
	}
});
