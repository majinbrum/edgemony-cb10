import { POST } from "./FETCH.js";
import { DELETE } from "./FETCH.js";
import { GET } from "./FETCH.js";

function querySel(selector) {
	return document.querySelector(selector);
}

const mainEl = querySel("main");

//! FIRST FETCH !//
const render = async (id = "") => {
	const data = await GET(id);
	renderProducts(data);
};

render();

// const productsGET = await GET();
// renderProducts(productsGET);

const titleInput = querySel(".title");
const priceInput = querySel(".price");
const descriptionInput = querySel(".description");
const categoryIdInput = querySel(".category-id");
const imagesInput = querySel(".images");
const postBtn = querySel(".button-post");

const searchIdBtn = querySel(".button-search");

searchIdBtn.addEventListener("click", async function (e) {
	e.preventDefault();

	const searchIdInputEl = querySel(".id-search");
	const searchIdInputValue = searchIdInputEl.value;

	const productById = await GET(searchIdInputValue);
	console.log(productById);

	searchIdInputEl.value = "";

	renderProducts(productById);
});

postBtn.onclick = async (e) => {
	e.preventDefault();
	const newProductToPost = {
		title: titleInput.value,
		price: priceInput.value,
		description: descriptionInput.value,
		categoryId: categoryIdInput.value,
		images: [imagesInput.value],
	};

	const newProductID = await POST(newProductToPost);
	render(newProductID);

	titleInput.value = "";
	priceInput.value = "";
	descriptionInput.value = "";
	categoryIdInput.value = "";
	imagesInput.value = "";
};

function renderProducts(arrayOrID) {
	mainEl.innerHTML = "";
	if (arrayOrID.hasOwnProperty("id")) {
		/// if (typeof arrayOrID === "number") {
		createSingleProductEl(arrayOrID);
	} else {
		arrayOrID.forEach((singleProduct) => {
			createSingleProductEl(singleProduct);
		});
	}
}

function createSingleProductEl(singleProduct) {
	const singleProductDiv = document.createElement("div");
	singleProductDiv.className = "added-product-div";
	const singleProductName = document.createElement("p");
	singleProductName.textContent = singleProduct.title;
	const singleProductDelete = document.createElement("button");
	singleProductDelete.textContent = "DELETE";
	const singleProductEdit = document.createElement("button");
	singleProductEdit.textContent = "EDIT";

	singleProductDiv.append(singleProductName, singleProductDelete, singleProductEdit);
	mainEl.append(singleProductDiv);

	singleProductDelete.addEventListener("click", function () {
		mainEl.innerHTML = "";
		DELETE(singleProduct.id);
		render();
	});
}
