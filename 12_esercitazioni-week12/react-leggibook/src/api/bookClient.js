export const getBookList = () => {
	// andremo a sostituire qui la chiamata al backend senza dovere modificare la struttura
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(() => {
				return [
					{
						id: 1,
						isbn: "0-8783-3579-X",
						title: "Paperino discovers the world",
						genres: ["fantasy", "children"],
						author: "Pippo and Pluto",
					},
					{
						id: 2,
						isbn: "0-8783-3579-Y",
						title: "Paperino and the gold of Ruanda",
						genres: ["adventure", "children"],
						author: "Pippo alone",
					},
				];
			});
		}, 500);
	});
};

export const getBookDetail = () => {
	// andremo a sostituire qui la chiamata al backend senza dovere modificare la struttura
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(() => {
				return {
					id: 1,
					isbn: "0-8783-3579-X",
					title: "Paperino discovers the world",
					genres: ["fantasy", "children"],
					author: "Pippo and Pluto",
					description:
						"Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
					cover: "https://img.freepik.com/free-psd/book-hardcover-mockup-three-views_125540-226.jpg",
				};
			});
			// reject({
			// 	message: "Errore bruttissimo",
			// });
		}, 500);
	});
};

export const addBook = (body) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ ...body, id: self.crypto.randomUUID() });
		}, 1000);
	});
};

// export const getBookList = async () => {
// 	try {
// 		const res = await fetch("https://jsonplaceholder.typicode.com/users");
// 		return await res.json();
// 	} catch (error) {
// 		throw new Error("Error:", error);
// 	}
// };
