import { selectEl, wishlistList } from "../../script.js";
import { genSingleCard } from "./genCards.js";
import { wishlist, newWishlistItems } from "../data/wishlist.js";

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

const btnAddRandomToWishlist = selectEl(".btn-add");
btnAddRandomToWishlist.onclick = () => checkRandomToWishlist();

const handleModal = () => {
	const modal = selectEl(".modal");
	modal.style.display = "block";

	const closeModal = selectEl(".modal-close");
	closeModal.onclick = () => (modal.style.display = "none");
};
