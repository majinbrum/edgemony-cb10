import { POST, DELETE, GET, UPDATE } from "./FETCH.js";

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

///***QUERY ELEMENTS***///
const titleInput = querySel(".title");
const priceInput = querySel(".price");
const descriptionInput = querySel(".description");
const categoryIdInput = querySel(".category-id");
const imagesInput = querySel(".images");
const postBtn = querySel(".button-post");

const saveEditBtn = querySel(".button-save");

///***POST WITH INPUT FIELDS***///
const postProduct = async () => {
	const newProductToPost = {
		title: titleInput.value,
		price: priceInput.value,
		description: descriptionInput.value,
		categoryId: categoryIdInput.value,
		images: [imagesInput.value],
	};

	const newProductID = await POST(newProductToPost);
	render(newProductID);
};

postBtn.onclick = async (e) => {
	e.preventDefault();
	postProduct();
	resetInputs();
};

///***SEARCH BY ID***///
const searchIdBtn = querySel(".button-search");
const searchIdInputEl = querySel(".id-search");

searchIdBtn.addEventListener("click", async function (e) {
	e.preventDefault();

	const searchIdInputValue = searchIdInputEl.value;

	const productById = await GET(searchIdInputValue);
	console.log(productById);

	renderProducts(productById);
	searchIdInputEl.value = "";
});

///***CREATE ELEMENTS***///
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

	singleProductEdit.addEventListener("click", function () {
		console.log(singleProduct);

		titleInput.value = singleProduct.title;
		priceInput.value = singleProduct.price;
		descriptionInput.value = singleProduct.description;
		categoryIdInput.value = singleProduct.category.id;
		imagesInput.value = singleProduct.images.join("").replace(/[\[\]"]/g, "");
		searchIdInputEl.value = singleProduct.id;
	});
}

///***UPDATE***///
saveEditBtn.addEventListener("click", async function () {
	const id = searchIdInputEl.value;

	const objectToUpdateProduct = {
		title: titleInput.value,
		price: priceInput.value,
		description: descriptionInput.value,
		categoryId: categoryIdInput.value,
		images: [imagesInput.value],
	};

	const updatedProduct = await UPDATE(id, objectToUpdateProduct);
	console.log(updatedProduct);
});

///***GENERIC FUNCTIONS***///
function resetInputs() {
	titleInput.value = "";
	priceInput.value = "";
	descriptionInput.value = "";
	categoryIdInput.value = "";
	imagesInput.value = "";
}

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
