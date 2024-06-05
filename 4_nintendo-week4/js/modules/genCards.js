import { buildCard } from "./buildCard.js";
import { randomToWishlist } from "./addRandomItem.js";

// TODO 2: generare tante card, quanti sono gli obj contenuti negli array
const genCards = (array, list) => {
	array.forEach((singleCard) => {
		genSingleCard(list, singleCard);
	});
};

const genSingleCard = (list, singleCard) => {
	const card = buildCard(singleCard);
	list.append(card);
	if (singleCard === randomToWishlist) {
		card.scrollIntoView({
			behavior: "smooth",
		});
	}
};

export { genCards, genSingleCard };
