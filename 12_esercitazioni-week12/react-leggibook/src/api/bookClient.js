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
						genre: "fantasy",
						author: "Pippo and Pluto",
					},
					{
						id: 2,
						isbn: "0-8783-3579-Y",
						title: "Paperino and the gold of Ruanda",
						genre: "adventure",
						author: "Pippo alone",
					},
				];
			});
		}, 2000);
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
