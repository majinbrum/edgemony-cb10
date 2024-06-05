// TODO 0: importo il modulo pokemon.js
import { pokemon } from "./data/pokemon.js";
import { cardElGen, cardListGen } from "./modules/components-bruna.js";

/***************************************************************/

// TODO 1: creo la lista e la inserisco dentro in main
const mainSectionEl = document.querySelector(".main");
const cardList = cardListGen();

/***************************************************************/

// TODO 5: prendo il button per aggiungere un Pokémon
const btnAdd = document.querySelector(".btn-add");

/* this vs arrow function
btnAdd.addEventListener("click", function () {
	console.log(this);
});
btnAdd.addEventListener("click", (event) => {
	console.log(event.target);
});
*/

/***************************************************************/

// TODO 2: generare tante card, quanti sono i pokémon contenuti nella lista
// for (let i = 0; i <= pokemon.length - 1; i++){
for (let i = 0; i < pokemon.length; i++) {
	const cardEl = cardElGen(pokemon[i]);
	cardList.append(cardEl);
}

/***************************************************************/

// TODO 4: preparo un nuovo pokémon da aggiungere tramite un tasto "add Pokémon"
const newPokemon = {
	id: 10,
	name: "10",
	type: "fire",
	image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
};

/***************************************************************/

// TODO 3: voglio che la card list venga genera al "onload" della pagina
window.onload = mainSectionEl.append(cardList);
