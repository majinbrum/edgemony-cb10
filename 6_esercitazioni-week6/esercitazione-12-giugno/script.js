import { POST } from "./FETCH.js";
import { DELETE } from "./FETCH.js";

function querySel(selector) {
	return document.querySelector(selector);
}

const mainEl = querySel("main");

const titleInput = querySel(".title");
const priceInput = querySel(".price");
const descriptionInput = querySel(".description");
const categoryIdInput = querySel(".category-id");
const imagesInput = querySel(".images");
const postBtn = querySel(".button-post");

const addedProducts = [];

postBtn.onclick = async (e) => {
	e.preventDefault();
	const newProductToPost = {
		title: titleInput.value,
		price: priceInput.value,
		description: descriptionInput.value,
		categoryId: categoryIdInput.value,
		images: [imagesInput.value],
	};

	// POST(newProductToPost);
	const addedProductId = await POST(newProductToPost);
	addedProducts.push(newProductToPost);

	console.log("newProductToPost", newProductToPost);
	console.log("addedProductId", addedProductId);

	renderAddedProducts(addedProducts, addedProductId);
};

function renderAddedProducts(array, addedProductId) {
	mainEl.innerHTML = "";

	array.forEach((singleProduct) => {
		const singleProductDiv = document.createElement("div");
		singleProductDiv.className = "added-product-div";
		const singleProductName = document.createElement("p");
		singleProductName.textContent = singleProduct.title;
		const singleProductDelete = document.createElement("button");
		singleProductDelete.textContent = "DELETE";

		singleProductDiv.append(singleProductName, singleProductDelete);
		mainEl.append(singleProductDiv);

		singleProductDelete.onclick = () => {
			DELETE(addedProductId);
			console.log(addedProductId);
			refreshProductsList(array, singleProduct);
		};
	});
}

function refreshProductsList(array, singleProduct) {
	const indexOfSingleProduct = addedProducts.indexOf(singleProduct);
	addedProducts.splice(indexOfSingleProduct, 1);
	console.log(addedProducts);

	renderAddedProducts(array);
}
