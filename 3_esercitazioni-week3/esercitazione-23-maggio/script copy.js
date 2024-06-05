// TODO 1: Selettori
// Usando il querySelector prendiamo l'elemento con id heading ed eseguiamo un console.log
// output <h1>...</h1>

const headingEl = document.body.querySelector("#heading");
console.log(headingEl);

// Per ogni elemento button presente in pagina stampiamo in console il suo testo.
const buttonEls = document.querySelectorAll("button");

for (let buttonEl of buttonEls) {
	console.log(buttonEl.innerText);
}

// output
// cancel
// Click me!

console.log("Fine esercizio 1");

/*********************Esercizio2*********************/

// *Contatore
// TODO 1: salviamo due variabili con dentro i riferimenti ai due button della pagina resetBtn e clickBtn;
const resetBtn = document.body.querySelector("[data-reset]");
const clickBtn = document.body.querySelector("[data-increment]");

// TODO PLUS: controlliamo se esistono
if (resetBtn && clickBtn) {
	// TODO 8: inseriamo una function dentro l'evento onclick di resetBtn e per ogni click impostiamo innerHTML di clickBtn a "0";
	resetBtn.onclick = () => {
		clickBtn.innerHTML = 0; // verrà convertito in stringa
	};

	// TODO 2: inseriamo una function dentro l'evento onclick di clickBtn e per ogni click:
	clickBtn.onclick = function () {
		// dentro this ho l'elemento a cui è agganciato l'evento
		// console.log("dentro il click", this); // con l'arrow function non si può usare this

		// TODO 3: leggiamo il valore attuale del proprio innerHTML
		const html = this.innerHTML; // same as clickBtn.innerHTML;

		/* ver1
		// TODO 4: convertiamo il valore a numero
		let htmlToNumber = Number(html);

		// TODO 5: se NaN clickBtn.innerHTML a "0";
		const count = Number.isNaN(htmlToNumber) ? 0 : count;
		*/

		/* ver2
		// TODO 4: convertiamo il valore a numero
		let count = Number(html);

		// TODO 5: se NaN clickBtn.innerHTML a "0";
		 count ||= 0 Number.isNaN(htmlToNumber) ? 0 : count;
		*/

		/* ver3
		// TODO 4: convertiamo il valore a numero
		const condition = false || 0 || "ciao";
		if(contition){
		...
		}

		// TODO 5: se NaN clickBtn.innerHTML a "0";
		 count ||= 0 Number.isNaN(htmlToNumber) ? 0 : count;
		*/

		// TODO 4: convertiamo il valore a numero, se NaN clickBtn.innerHTML a "0";
		const count = Number(html) || 0;

		// TODO 5: incrementiamo il valore precedente e  salviamolo in innerHTML;
		this.innerHTML = count + 1;

		console.log(this.innerHTML);
	};
}
