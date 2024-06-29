import { games } from "./js/data/games.js";
import { merch } from "./js/data/merch.js";
import { wishlist } from "./js/data/wishlist.js";
import { createCardsAndAppendToList } from "./js/modules/genCards.js";
import "./js/modules/addRandomItem.js";
import "./js/modules/filterCategories.js";

export function selectEl(selector) {
	return document.querySelector(selector);
}

export const gamesList = selectEl(".games-list");
export const merchList = selectEl(".merch-list");
export const wishlistList = selectEl(".wishlist-list");

// TODO 3: voglio che le card list vengano generate al load della pagina
window.onload = () => {
	createCardsAndAppendToList(games, gamesList);
	createCardsAndAppendToList(merch, merchList);
	createCardsAndAppendToList(wishlist, wishlistList);
};
