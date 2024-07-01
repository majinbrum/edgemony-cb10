// import { createPokedexLi, appendPokemonTypes, appendPokemonIcon } from "./components/pokemonLi.js";
import { createPokedexLi, appendPokemonTypes } from "./components/pokemonLi.js";

fetch("https://pokeapi.co/api/v2/pokedex/1/")
	.then((res) => res.json())
	.then((pokedex) => {
		const pokemonEntries = pokedex.pokemon_entries.slice(0, 148);

		pokemonEntries.forEach((pokemon) => {
			const pokemonNumber = pokemon.entry_number;
			const pokemonName = pokemon.pokemon_species.name;
			createPokedexLi(pokemonNumber, pokemonName);

			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
				.then((res) => res.json())
				.then((pokemon) => {
					// const pokemonIcon = pokemon.sprites.front_default;
					// appendPokemonIcon(pokemonName, pokemonIcon);
					const pokemonTypes = pokemon.types;
					appendPokemonTypes(pokemonName, pokemonTypes);
				});
		});
	});
