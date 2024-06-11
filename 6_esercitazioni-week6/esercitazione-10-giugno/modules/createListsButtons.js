import { querySel, createEl, setClassList, appendElements } from "./utilities.js";

export function createListsButtons(lists) {
	const btnListsNavbar = querySel(".btn-lists-navbar");
	btnListsNavbar.innerHTML = "";
	lists.forEach((listName) => {
		const listNameBtn = createEl("button");
		setClassList(listNameBtn, "movie-list-btn");
		listNameBtn.id = listName;

		const listNameString = (listName.charAt(0).toUpperCase() + listName.slice(1, listName.length)).replaceAll("_", " ");
		listNameBtn.textContent = listNameString;

		appendElements(btnListsNavbar, listNameBtn);
	});
}
