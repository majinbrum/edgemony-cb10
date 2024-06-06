/*
<div class='pokedex-li'>
	<span class='list-arrow'>&#x1F782;</span>
	<h3>
		N°<span>001</span>
	</h3>
	<img class='pokeball' src='./pokeball.png' alt='Pokéball image' width='30' height='30' />
	<h2 class='pokemon-name'>Bulbasaur</h2>
	<h4 class='pokemon-type erba'>Erba</h4>
	<h4 class='pokemon-type veleno'>Veleno</h4>
</div>
*/

const createEl = (el) => {
	return document.createElement(el);
};

const addClass = (el, className) => {
	return (el.className = className);
};

const pokedexMainDiv = document.querySelector(".pokedex-main");

const createPokedexLi = (pokemonNumber, pokemonName) => {
	const pokedexLi = createEl("div");
	addClass(pokedexLi, "pokedex-li");
	pokedexMainDiv.append(pokedexLi);

	const listArrow = createEl("span");
	addClass(listArrow, "list-arrow");
	listArrow.innerHTML = "&#x1F782";

	const pokemonNumberEl = createEl("h3");
	pokemonNumberEl.textContent = "N°";
	const pokemonNumberSpanEl = createEl("span");
	// pokemonNumberSpanEl.textContent = pokemonNumber;
	switch (pokemonNumber.toString().length) {
		case 2:
			pokemonNumberSpanEl.textContent = `0${pokemonNumber}`;
			break;
		case 1:
			pokemonNumberSpanEl.textContent = `00${pokemonNumber}`;
			break;
		default:
			pokemonNumberSpanEl.textContent = pokemonNumber;
			break;
	}
	pokemonNumberEl.append(pokemonNumberSpanEl);

	const pokeBall = createEl("img");
	addClass(pokeBall, "pokeBall");
	pokeBall.src = "./pokeball.png";
	pokeBall.alt = "Pokéball image";
	pokeBall.width = "30";
	pokeBall.height = "30";

	const pokemonNameEl = createEl("h2");
	addClass(pokemonNameEl, "pokemon-name");
	pokemonNameEl.textContent = pokemonName;

	// const pokemonTypeEl = createEl("h4");
	// pokemonTypeEl.classList = `pokemon-type ${pokemonType}`;
	// pokemonNameEl.textContent = pokemonType;

	// pokedexLi.append(listArrow, pokemonNumberEl, pokeBall, pokemonNameEl, pokemonTypeEl);
	pokedexLi.append(listArrow, pokemonNumberEl, pokeBall, pokemonNameEl);
};

export { createPokedexLi };
