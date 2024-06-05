function query(selector) {
	return document.body.querySelector(selector);
}

function queryAll(selector) {
	return document.body.querySelectorAll(selector);
}

/*
// reset della pagina
const containerEl = query(".container");
containerEl.remove();
*/

const appEl = document.querySelector("#app");

/*
// ! Questo sostituisce tutto, vorrei aggiungere solo degli elementi, mantenendo quelli di prima
appEl.innerHTML = `<div>
<h1>Ecco la pagina della fenice</h1>
</div>`;
*/

appEl.insertAdjacentHTML("afterbegin", `
<div>
<h1>Ecco la pagina della fenice</h1>
</div>
`);

const h1El = appEl.querySelector("h1");
h1El.style.fontSize = "1.5rem";

// Creare un elemento da 0
const newH2El = document.createElement("h2");

newH2El.className = "text-big";

h1El.insertAdjacentElement("afterend", newH2El);
// appEl.append(newH2El); // non ci da la possibilità di decidere dove, non si usa più ma si possono trovare tracce

newH2El.innerHTML = "Sono un h2";

newH2El.onclick = function(){
	console.log(this.innerHTML);
}

// Form

const formEl = document.querySelector("form");
const inputEl = document.querySelector("input");
const previewEl = document.getElementById("preview");

let nome = "";
let cognome = "Alamia";

console.log("Valore iniziale: ", inputEl.value);

inputEl.oninput = function(event){
	console.log(event);
	console.log("Stai digitando: ", this.value);
	nome = this.value;
	previewEl.innerHTML = nome.toUpperCase() + " " + cognome;
}

formEl.onsubmit = function(event){
	event.preventDefault(); // impediamo che la pagina venga ricaricata -> non riesco a tenermi le cose in memoria perché viene ricaricato tutto javascript
	console.log(event);

	const text = inputEl.value;
	console.log("Hai digitato: ", text);

	const elementEl = document.createElement("li");
	elementEl.innerHTML = text;

	previewEl.insertAdjacentElement("beforeend", elementEl);
	// previewEl.insertAdjacentHTML("beforeend", 	`<li>${text}</li>`);

	inputEl.value = "";
}

function log(message){
console.log(message);
}

log("ciao");
log("bye");