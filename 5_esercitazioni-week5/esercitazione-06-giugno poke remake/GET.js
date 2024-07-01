const BASE_URL = "https://pokeapi.co/api/v2/";
const POKEDEX_ENDPOINT = "pokedex/1/";
const POKEMON_ENDPOINT = "pokemon/";
const TYPES_ENDPOINT = "type/";

export const GETpokedex = async () => {
	try {
		const res = await fetch(`${BASE_URL}${POKEDEX_ENDPOINT}`);
		const data = await res.json();
		const pokemonEntries = data.pokemon_entries.slice(0, 148);
		if (data.error) {
			throw data;
		}
		return pokemonEntries;
	} catch (error) {
		console.error("Error fetching Pokedex:", error);
	}
};

export const GETpokemon = async (pokemonName) => {
	try {
		const res = await fetch(`${BASE_URL}${POKEMON_ENDPOINT}${pokemonName}`);
		const data = await res.json();
		if (data.error) {
			throw data;
		}
		return data;
	} catch (error) {
		console.error(`Error fetching Pokémon (${pokemonName}):`, error);
	}
};

export const GETtypes = async () => {
	try {
		const res = await fetch(`${BASE_URL}${TYPES_ENDPOINT}`);
		const data = await res.json();
		if (data.error) {
			throw data;
		}
		const pokemonTypes = data.results.map((singleType) => singleType.name);
		return pokemonTypes.slice(0, 18);
	} catch (error) {
		console.error(`Error fetching Pokémon Types`, error);
	}
};
