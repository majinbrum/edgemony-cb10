import { createPokedexLi } from "./components/pokemonLi.js";

fetch("https://pokeapi.co/api/v2/pokedex/1/")
	.then((res) => res.json())
	.then((pokedex) => {
		const pokemonEntries = pokedex.pokemon_entries.slice(0, 148);

		pokemonEntries.forEach((pokemon) => {
			const pokemonName = pokemon.pokemon_species.name;
			const pokemonNumber = pokemon.entry_number;

			createPokedexLi(pokemonNumber, pokemonName);
		});

		// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
		// 	.then((res) => res.json())
		// 	.then((pokemon) => {
		// 		pokemon.types.forEach((pokemonSingleType) => {
		// 			const pokemonType = pokemonSingleType.type.name;
		// 			console.log(pokemonType);
		// 		});
		// 	});
	});

// 148
