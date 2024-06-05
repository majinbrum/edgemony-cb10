import { wishlistList } from "../../script.js";
import { wishlist } from "../data/wishlist.js";
import { genCards } from "./genCards.js";
import { btnUnfiltered, btnFilterGames, btnFilterMerch, filterCategories, wishlistFiltered } from "./filterCategories.js";

const handleWishlistIcon = (obj, icon) => {
	icon["width"] = "30";
	icon["height"] = "30";
	icon.src = obj.wishlist ? "./img/heart-icon-full.png" : "./img/heart-icon.png";

	icon.onmouseover = () => (icon.src = obj.wishlist ? "./img/heart-icon.png" : "./img/heart-icon-full.png");
	icon.onmouseleave = () => (icon.src = obj.wishlist ? "./img/heart-icon-full.png" : "./img/heart-icon.png");

	icon.onclick = () => handleWishlistItems(obj);
};

const handleWishlistItems = (obj) => {
	obj.wishlist = !obj.wishlist;
	if (!obj.wishlist) {
		wishlist.splice(0, wishlist.length, ...wishlist.filter((singleWishlistObj) => singleWishlistObj.wishlist === true));
	} else {
		wishlist.push(obj);
	}

	wishlistList.innerHTML = "";
	if (btnUnfiltered.classList.contains("active")) {
		genCards(wishlist, wishlistList);
	} else if (btnFilterGames.classList.contains("active")) {
		filterCategories(btnFilterGames, "games", wishlistFiltered);
	} else if (btnFilterMerch.classList.contains("active")) {
		filterCategories(btnFilterMerch, "merch", wishlistFiltered);
	}

	const wishlistListLast = wishlistList.childNodes[wishlistList.childNodes.length - 1];
	wishlistListLast.scrollIntoView({
		behavior: "smooth",
		block: "end",
		inline: "nearest",
	});
};

export { handleWishlistIcon };
