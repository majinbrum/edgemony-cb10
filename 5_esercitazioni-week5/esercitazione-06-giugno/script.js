import { createPokedexLi } from "./components/pokemonLi.js";

fetch("https://pokeapi.co/api/v2/pokedex/1/")
	.then((res) => res.json())
	.then((pokedex) => {
		const pokemonEntries = pokedex.pokemon_entries.slice(0, 148);

		pokemonEntries.forEach((pokemon) => {
			const pokemonName = pokemon.pokemon_species.name;
			const pokemonNumber = pokemon.entry_number;

			fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
				.then((res) => res.json())
				.then((pokemon) => {
					const pokemonTypes = pokemon.types;
					// console.log(pokemonTypes[0].type.name);
					createPokedexLi(pokemonNumber, pokemonName, pokemonTypes);
				});
		});
	});
