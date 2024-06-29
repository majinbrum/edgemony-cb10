import { selectEl, wishlistList } from "../../script.js";
import { wishlist } from "../data/wishlist.js";
import { createCardsAndAppendToList } from "./genCards.js";

const buttons = document.querySelectorAll(".wishlist-buttons button");
export const btnUnfiltered = selectEl(".btn-unfiltered");
export const btnFilterGames = selectEl(".btn-filtered-games");
export const btnFilterMerch = selectEl(".btn-filtered-merch");

btnFilterGames.onclick = () => filterCategories(btnFilterGames, "games", wishlistFiltered);
btnFilterMerch.onclick = () => filterCategories(btnFilterMerch, "merch", wishlistFiltered);
btnUnfiltered.onclick = () => filterCategories(btnUnfiltered, "wishlist", wishlist);

export const wishlistFiltered = [];

export const filterCategories = (btn, category, array) => {
	buttons.forEach((singleButton) => singleButton.classList.remove("active"));
	btn.classList.add("active");

	wishlistList.innerHTML = "";

	if (btn !== btnUnfiltered) {
		wishlistFiltered.splice(0, wishlistFiltered.length, ...wishlist.filter((singleWishlistObj) => singleWishlistObj.category === category));
	}

	createCardsAndAppendToList(array, wishlistList);
};
