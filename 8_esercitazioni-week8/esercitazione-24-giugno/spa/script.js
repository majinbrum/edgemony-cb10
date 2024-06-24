//* Creare una pagina usando solo JS che contenga:
// TODO 2: Header con Logo e Menu (almeno 2 link)
// TODO 3: Footer con logo e menu con sotto menu in stile footer Apple (https://apple.com)
// TODO 4: Sidebar con elementi statici
// TODO 5: Main con una lista di articoli presi da https://jsonplaceholder.typicode.com/posts.
// TODO 6: Per ogni articolo mostrare: titolo, testo ed autore.

import { renderHeader } from "./components/renderHeader.js";
import { renderMain } from "./components/renderMain.js";
import { renderAside } from "./components/renderAside.js";
import { renderFooter } from "./components/renderFooter.js";

window.addEventListener("DOMContentLoaded", () => {
	const appEl = document.querySelector("div#app");

	if (appEl) {
		renderPage(appEl);
	}
});

async function renderPage(container) {
	const headerEl = renderHeader();
	const mainEl = await renderMain();
	const asideEl = renderAside();
	const footerEl = renderFooter();

	container.innerHTML = headerEl + mainEl + asideEl + footerEl;
}
