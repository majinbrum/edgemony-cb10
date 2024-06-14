import { querySel } from "./script.js";
import { errorHandler } from "./errorHandler.js";

const BASE_URL = "https://api.escuelajs.co/";
const productEndpoint = "api/v1/products";

// const options = {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify(),
// };

const searchErrorMessage = querySel(".search-error");
searchErrorMessage.style.color = "red";
searchErrorMessage.role = "alert";

export const GET = async (id = "") => {
	try {
		const res = await fetch(`${BASE_URL}${productEndpoint}/${id}?limit=8&offset=0`, {
			method: "GET",
		});
		const data = await res.json();
		console.log("getProduct", data);
		console.log("getProductID", data.id);

		if (data.error) {
			// console.error(data);
			throw new Error(data);
		}

		if (data.name === "EntityNotFoundError") {
			// searchErrorMessage.textContent = "Il prodotto che stai cercando non esiste.";
			searchErrorMessage.textContent = "Il prodotto che stai cercando non esiste.";
			throw new Error("Il prodotto che stai cercando non esiste.");
		}

		searchErrorMessage.textContent = "";
		return data;
	} catch (err) {
		console.error("SONO L'ERRORE ==>", err);
	}
};

export const POST = async (newObject) => {
	try {
		const res = await fetch(`${BASE_URL}${productEndpoint}`, {
			method: "POST",
			headers: {
				accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newObject),
		});

		const data = await res.json();
		console.log("newObjectToPost", data);
		console.log("addedObjectId", data.id);

		if (data.error) {
			console.log(data);
			throw data;
		}

		searchErrorMessage.textContent = "";
		// return data;
		return data.id;
	} catch (err) {
		console.error("SONO L'ERRORE ==>", err);
		errorHandler(err);
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

export const DELETE = async (id) => {
	try {
		const res = await fetch(`${BASE_URL}${productEndpoint}/${id}`, {
			method: "DELETE",
		});

		const data = await res.json();
		console.log("deleted?", data);
		if (data.error) {
			console.log(data);
			throw data;
		}

		searchErrorMessage.textContent = "";
		return data;
	} catch (err) {
		console.error("SONO L'ERRORE ==>", err);
		errorHandler(err);
	}
};

// posso fare una funzione unica UPDATE in cui decido di volta in volta se usare PATCH o PUT
export const UPDATE = async (id, object, method = "PUT") => {
	try {
		const res = await fetch(` ${BASE_URL}${productEndpoint}/${id}`, {
			method: method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(object),
		});

		const data = await res.json();
		if (data.error) {
			console.log(data);
			throw data;
		}

		searchErrorMessage.textContent = "";
		return data;
	} catch (err) {
		console.error("SONO L'ERRORE ==>", err);
		errorHandler(err);
	}
};

//*************************************************//

// export const PUT = async (id, object) => {
// 	try {
// 		const res = await fetch(` ${BASE_URL}${productEndpoint}/${id}`, {
// 			method: "PUT",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(object),
// 		});

// 		const data = await res.json();
// 		if (data.error) {
// 			console.log(data);
// 			throw data;
// 		}

// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// export const PATCH = async (id, object) => {
// 	try {
// 		const res = await fetch(` ${BASE_URL}${productEndpoint}/${id}`, {
// 			method: "PATCH",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(object),
// 		});

// 		const data = await res.json();
// 		if (data.error) {
// 			console.log(data);
// 			throw data;
// 		}

// 		return data;
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

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
