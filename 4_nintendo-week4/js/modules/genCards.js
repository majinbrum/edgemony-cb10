import { buildCard } from "./buildCard.js";
import { randomToWishlist } from "./addRandomItem.js";

// TODO 2: generare tante card, quanti sono gli obj contenuti negli array
const createCardsAndAppendToList = (items, listEl) => {
	items.forEach((singleCard) => {
		genSingleCard(listEl, singleCard);
	});
};

const genSingleCard = (listEl, singleCard) => {
	const card = buildCard(singleCard);
	listEl.append(card);
	if (singleCard === randomToWishlist) {
		card.scrollIntoView({
			behavior: "smooth",
		});
	}
};

export { createCardsAndAppendToList, genSingleCard };
