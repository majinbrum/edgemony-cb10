import { handleWishlistIcon } from "./handleWishlist.js";

function createEl(tag, attribute, value) {
	const newElement = document.createElement(tag);
	if (attribute && value) {
		newElement[attribute] = value;
	}
	return newElement;
}

export const buildCard = (obj) => {
	const cardDiv = createEl("div", "className", "card");
	const cardImgDiv = createEl("div", "className", "card-img");
	const cardImg = createEl("img", "src", obj.img);
	cardImg.loading = "lazy";
	const cardContentDiv = createEl("div", "className", "card-content");
	const cardContentInfoDiv = createEl("div", "className", "info");
	const cardContentInfoName = createEl("h3", "textContent", obj.name);
	const cardContentInfoDescription = createEl("p", "textContent", obj.description);
	const cardContentAddDiv = createEl("div", "className", "add");
	const cardContentAddPrice = createEl("p", "textContent", obj.price);

	const cardContentAddWishlist = createEl("button", "className", "wishlistBtn");
	const cardWishlistIcon = createEl("img", "alt", "Wishlist icon");
	handleWishlistIcon(obj, cardWishlistIcon);

	cardDiv.append(cardImgDiv, cardContentDiv);
	cardImgDiv.append(cardImg);
	cardContentDiv.append(cardContentInfoDiv, cardContentAddDiv);
	cardContentInfoDiv.append(cardContentInfoName, cardContentInfoDescription);
	cardContentAddDiv.append(cardContentAddPrice, cardContentAddWishlist);
	cardContentAddWishlist.append(cardWishlistIcon);

	return cardDiv;
};

/*
// div di riferimento
			<div class="card">
				<div class="card-img"><img src="./img/games/supermariowonder.jpg" /></div>
				<div class="card-content">
					<div class="info">
						<h3>Super Mario Wonder</h3>
						<p>Aspettati di tutto in questa nuova avventura a scorrimento orizzontale in 2D di Mario!</p>
					</div>
					<div class="add">
						<p>€59.99</p>
						<button><img src="./img/heart-icon.png" alt="Heart icon" width="30" height="30" /></button>
					</div>
				</div>
			</div>
*/
