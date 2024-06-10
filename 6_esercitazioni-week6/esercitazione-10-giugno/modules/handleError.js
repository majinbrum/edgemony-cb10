import { createEl } from "./utilities.js";

export const handleError = (mainContainer) => {
	document.querySelector("header").style.display = "none";

	mainContainer.style.display = "flex";
	mainContainer.style.height = "100vh";
	mainContainer.style.alignItems = "center";
	mainContainer.style.backgroundColor = "rgb(192, 190, 224)";

	const errorDiv = createEl("div");
	errorDiv.style.textAlign = "center";
	const errorImg = createEl("img");
	errorImg.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXV4ZG81NjN2N3kyb2x2aXJweWlidmU4a3hudjF6dzdoN3loaDA4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9juhl2keMdsjTe2ZYl/giphy.webp";
	errorImg.style.marginBottom = "2rem";
	const errorTitle = createEl("h1");
	errorTitle.textContent = "Uups! There seems to be an error here!";
	errorTitle.style.marginBottom = "1rem";
	const errorText = createEl("p");
	errorText.textContent = "Please check the URL and try again :)";

	errorDiv.append(errorImg, errorTitle, errorText);
	mainContainer.append(errorDiv);
};
