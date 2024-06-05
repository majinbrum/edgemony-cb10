// console.dir(document.body) per vedere tutte le proprietà

// possiamo fare il log del body usando
console.log(document.body);

// se vogliamo vedere le sue props usiamo invece
console.dir(document.body);

// per selezionare un elemento possiamo usare il querySelector();
// possiamo salvarlo poi dentro una variabile:
const headingEl = document.querySelector("#heading"); // in questo caso stiamo selezionando l'elemento HTML con id="heading"

// appunto sulla nomenclatura: aggiungere El per distinguere l'elemento da altro
const heading = "Mio nuovo titolo";

// querySelector torna 2 possibili valori: (HTMLElement | null)

// il querySelector torna solo il primo elemento che matcha
// se per esempio abbiamo due button, usiamo querySelectorAll
const buttonEls = document.querySelectorAll(button); // []

// ogni elemento del DOM ha la possibilità di cercare al suo interno
const scriptEls = document.body.querySelectorAll();

// oppure
const containerEl = document.body.querySelector(".container"); // prendiamo il primo div.container
// se containerEl non è null:
if (containerEl) {
	const buttonsInContainerEls = containerEl.querySelectorAll("button"); // tutti i button dentro il container
}

/******ALL******/

const buttonsEls = document.body.querySelectorAll(".container button");
const array = Array.from(buttonsEls);

// usiamo come array
for (let el of array) {
	console.log("el:", el);
	el.innerHTML = "pollice";
}

const everyButtonHas3Chars = array.every(function (button) {
	return button.innerHTML.length > 2;
});
console.log(everyButtonHas3Chars);

// lavoriamo su iterabile
for (let button of buttonsEls) {
	console.log("button:", button);
}

/******ON CLICK******/

const cancel = document.body.querySelector(".container button");

const confirm = document.body.querySelector(".container button")[1];

if (cancel) {
	console.log(cancel.innerHTML);
	cancel.innerHTML = "<span>Non voglio più! Non mi va!</span>";

	cancel.onclick = function () {
		console.log("vecchio html", cancel.innerHTML);
		cancel.innerHTML = "Sono un nuovo button!";
	};
}

function changeEl() {
	if (!cancel) return; // come se fosse un break;

	console.log(cancel);
}
