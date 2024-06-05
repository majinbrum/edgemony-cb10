// TODO 0: importo il modulo pokemon.js
import { pokemon } from "./data/pokemon.js";
import { cardElGen, cardListGen } from "./modules/components-bruna.js";

/***************************************************************/

// TODO 4: preparo un nuovo pokémon da aggiungere tramite un tasto "add Pokémon"
// const newPokemon = {
// 	id: 10,
// 	name: "Caterpie",
// 	type: "coleottero",
// 	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
// };

/***************************************************************/

// TODO 1: creo la lista e la inserisco dentro in main
const mainSectionEl = document.querySelector(".main");

/***************************************************************/

// TODO 6: do un nome alle operazioni che mi permetto di rileggere l'array pokemon
const renderListCard = () => {
	const cardList = cardListGen();

	// TODO 2: generare tante card, quanti sono i pokémon contenuti nella lista
	// for (let i = 0; i <= pokemon.length - 1; i++){
	for (let i = 0; i < pokemon.length; i++) {
		const cardEl = cardElGen(pokemon[i]);
		cardList.append(cardEl);

		// TODO X:  voglio assegnare ad ogni btnDelete di ogni card generata (quindi restando dentro il for) un eventListener, così da lavorare con ogni singolo button
		const btnDelete = cardEl.querySelector(".btn-delete");
		btnDelete.addEventListener("click", function () {
			// recupero l'id del'oggetto attuale dentro l'array pokemon
			const idToDelete = pokemon[i].id;
			console.log("pokemon 1: ", pokemon);

			const indexFromIdToDelete = pokemon.findIndex((pokemonToDelete) => pokemonToDelete.id === idToDelete);
			console.log("indexFromIdToDelete", indexFromIdToDelete);

			// pokemon.splice(indexFromIdToDelete, 1);
			// console.log("pokemon 2: ", pokemon);

			/* Così funziona ma voglio capire l'altro metodo
			// mainSectionEl.innerHTML = "";
			// mainSectionEl.append(renderListCard());
			*/

			// const cardToRemove = document.querySelector(`#pokemonID${idToDelete}`);
			// console.log(cardToRemove);
			// cardToRemove.remove();
			// console.log("pokemon 3: ", pokemon);

			// pokemon = pokemon.filter((pok) => pok.id !== idToDelete);
		});
	}
	return cardList;
};

/***************************************************************/

// TODO 3: voglio che la card list venga genera al "onload" della pagina
window.onload = mainSectionEl.append(renderListCard());

/***************************************************************/

// TODO 5: prendo il button per aggiungere un Pokémon
const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", function () {
	const cardList = document.querySelector(".card-list");

	const newPokemon = {};

	newPokemon.id = pokemon.length;
	newPokemon.name = prompt("Pokémon name:");
	newPokemon.type = prompt("Pokémon type:").toLowerCase();
	newPokemon.image = prompt("Pokémon img link:");

	pokemon.push(newPokemon);
	cardList.append(cardElGen(pokemon[pokemon.length - 1]));
});
