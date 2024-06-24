// TODO 5: Main con una lista di articoli presi da https://jsonplaceholder.typicode.com/posts.
// TODO 6: Per ogni articolo mostrare: titolo, testo ed autore.

const GET = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10");
	const responseToData = await response.json();
	return responseToData;
};

export async function renderMain() {
	const articlesData = await GET();
	console.log(articlesData);

	const articlesEl = articlesData.map((singleArticle) => createArticleEl(singleArticle)).join("");

	return `
    <main>
      ${articlesEl}
    </main>
  `;
}

function createArticleEl(options) {
	const { title, body, userId } = options;

	return `
    <article>
      <h2>${title.toUpperCase()}</h2>
      <p>${body}</p>
      <h3>Author: ${userId}</h3>
    </article>
  `;
}
