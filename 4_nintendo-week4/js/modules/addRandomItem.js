import { selectEl, wishlistList } from "../../script.js";
import { genSingleCard } from "./genCards.js";
import { wishlist, newWishlistItems } from "../data/wishlist.js";

const btnAddRandomToWishlist = selectEl(".btn-add");
btnAddRandomToWishlist.onclick = () => checkRandomToWishlist();

export let randomToWishlist;

const checkRandomToWishlist = () => {
	randomToWishlist = newWishlistItems[Math.floor(Math.random() * newWishlistItems.length)];
	const isEqual = wishlist.some((i) => i.id === randomToWishlist.id);
	if (isEqual) {
		handleModal();
	} else {
		genSingleCard(wishlistList, randomToWishlist);
	}
};

const handleModal = () => {
	const modal = selectEl(".modal");
	modal.style.display = "block";

	const closeModal = selectEl(".modal-close");
	closeModal.onclick = () => (modal.style.display = "none");
};
