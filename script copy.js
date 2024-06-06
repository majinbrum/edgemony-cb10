import { createPokedexLi } from "./components/pokemonLi.js";

fetch("https://pokeapi.co/api/v2/pokedex/1/")
	.then((res) => res.json())
	.then((pokedex) => {
		const pokemonEntries = pokedex.pokemon_entries.slice(0, 148);

		pokemonEntries.forEach((pokemon) => {
			const pokemonNumber = pokemon.entry_number;
			const pokemonName = pokemon.pokemon_species.name;

			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
				.then((res) => res.json())
				.then((pokemon) => {
					const pokemonTypes = pokemon.types;
					createPokedexLi(pokemonNumber, pokemonName, pokemonTypes);
				});
		});
	});
