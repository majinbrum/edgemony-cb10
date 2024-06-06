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
	switch (`${pokemonNumber}`.length) {
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
	pokeBall.src = "./img/pokeball.png";
	pokeBall.alt = "Pokéball image";
	pokeBall.width = "30";
	pokeBall.height = "30";

	const pokemonNameEl = createEl("h2");
	addClass(pokemonNameEl, "pokemon-name");
	pokemonNameEl.setAttribute("data-name", pokemonName);
	pokemonNameEl.textContent = pokemonName;

	pokedexLi.append(listArrow, pokemonNumberEl, pokeBall, pokemonNameEl);
};

const appendPokemonIcon = (pokemonName, pokemonIcon) => {
	const singlePokedexLi = document.querySelector(`.pokemon-name[data-name="${pokemonName}"]`).parentElement;

	const pokemonIconDiv = createEl("div");
	addClass(pokemonIconDiv, "pokemon-icon");

	const pokemonIconEl = createEl("img");
	pokemonIconEl.src = pokemonIcon;
	pokemonIconEl.alt = `${pokemonName} icon`;
	pokemonIconEl.width = "30";
	pokemonIconEl.height = "30";

	pokemonIconDiv.appendChild(pokemonIconEl);

	singlePokedexLi.appendChild(pokemonIconDiv);
};

const appendPokemonTypes = (pokemonName, pokemonTypes) => {
	const singlePokedexLi = document.querySelector(`.pokemon-name[data-name="${pokemonName}"]`).parentElement;

	pokemonTypes.forEach((pokemonSingleType) => {
		const pokemonType = pokemonSingleType.type.name;
		const pokemonTypeEl = createEl("h4");
		pokemonTypeEl.textContent = pokemonType;
		pokemonTypeEl.classList = `pokemon-type ${pokemonType}`;

		singlePokedexLi.appendChild(pokemonTypeEl);
	});
};

export { createPokedexLi, appendPokemonIcon, appendPokemonTypes };

/*
<div class='pokedex-li'>
	<span class='list-arrow'>&#x1F782;</span>
	<h3>
		N°<span>001</span>
	</h3>
	<img class='pokeball' src='./img/pokeball.png' alt='Pokéball image' width='30' height='30' />
	<h2 class='pokemon-name'>Bulbasaur</h2>
	<h4 class='pokemon-type erba'>Erba</h4>
	<h4 class='pokemon-type veleno'>Veleno</h4>
</div>
*/
