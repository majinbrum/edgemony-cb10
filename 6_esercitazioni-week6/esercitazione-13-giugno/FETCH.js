const BASE_URL = "https://api.escuelajs.co/";
const productEndpoint = "api/v1/products";

// const options = {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(),
// };

export const POST = async (newProduct) => {
	const res = await fetch(`${BASE_URL}${productEndpoint}`, {
		method: "POST",
		headers: {
			accept: "*/*",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newProduct),
	});

	const data = await res.json();
	console.log("newProductToPost", data);
	console.log("addedProductId", data.id);
	// return data;
	return data.id;
};

// const newObjectTest = {
// 	title: "string",
// 	price: 20,
// 	description: "string",
// 	categoryId: 10,
// 	images: ["http://asd.asd"],
// };

// POST(newObjectTest);

export const DELETE = async (productId) => {
	const res = await fetch(`${BASE_URL}${productEndpoint}/${productId}`, {
		method: "DELETE",
	});

	const data = await res.json();
	console.log("deleted?", data);
	return data;
};

export const GET = async (id = "") => {
	if (id !== "") {
		const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
			method: "GET",
		});
		const data = await res.json();
		console.log("getProduct", data);
		console.log("getProductID", data.id);
		// return data.id;
		return data;
	} else {
		const res = await fetch(`${BASE_URL}${productEndpoint}`, {
			method: "GET",
		});
		const data = await res.json();
		console.log("getProduct", data);
		return data;
	}
	// return data.id;
};

// export const GET = async () => {
// 	const res = await fetch(`${BASE_URL}${productEndpoint}`, {
// 		method: "GET",
// 	});

// 	const data = await res.json();
// 	// console.log("getProducts", data);
// 	// console.log("getProductsID", data.id);
// 	return data;
// };

// GET();
