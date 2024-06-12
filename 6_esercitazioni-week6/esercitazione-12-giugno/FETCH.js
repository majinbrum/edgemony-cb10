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
	console.log(data);
	console.log(data.id);
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
	console.log(data.id);
	console.log(data);
};
