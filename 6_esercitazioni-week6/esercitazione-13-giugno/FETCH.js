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
	try {
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

		if (data.error) {
			console.log(data);
			throw data;
		}
		// return data;
		return data.id;
	} catch (err) {
		console.error(err);
	}
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
	try {
		const res = await fetch(`${BASE_URL}${productEndpoint}/${productId}`, {
			method: "DELETE",
		});

		const data = await res.json();
		console.log("deleted?", data);
		if (data.error) {
			console.log(data);
			throw data;
		}
		return data;
	} catch (err) {
		console.error(err);
	}
};

export const GET = async (id = "") => {
	try {
		if (id !== "") {
			const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
				method: "GET",
			});
			const data = await res.json();
			console.log("getProduct", data);
			console.log("getProductID", data.id);

			if (data.error) {
				console.log(data);
				throw data;
			}
			// return data.id;
			return data;
		} else {
			const res = await fetch(`${BASE_URL}${productEndpoint}`, {
				method: "GET",
			});
			const data = await res.json();
			console.log("getProduct", data);

			if (data.error) {
				console.log(data);
				throw data;
			}
			return data;
		}
		// return data.id;
	} catch (err) {
		console.error(err);
	}
};

export const PUT = async (product) => {
	try {
		const res = await fetch(` ${BASE_URL}${productEndpoint}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		});

		const data = res.json();
		if (data.error) {
			console.log(data);
			throw data;
		}

		return data;
	} catch (err) {
		console.error(err);
	}
};

//*************************************************//
// try {
// 	if (data.error) {
// 		console.log(data);
// 		throw data;
// 	}
// } catch (err) {
// 	errorHandler(err, mainContainerEl);
// }
//
