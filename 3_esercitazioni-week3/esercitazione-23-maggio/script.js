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
const clickBtn = document.body.querySelector("button.clickMe");
const resetBtn = document.body.querySelector("button.reset");

// TODO 2: inseriamo una function dentro l'evento onclick di clickBtn e per ogni click:
clickBtn.onclick = () => {
	// TODO 3: leggiamo il valore attuale del proprio innerHTML
	// TODO 4: convertiamo il valore a numero
	let clickBtnInnerToNumber = Number(clickBtn.innerHTML);

	// TODO 5: se NaN clickBtn.innerHTML a "0";
	const isClickBtnInnerToNumberNan = isNaN(clickBtnInnerToNumber);

	if (isClickBtnInnerToNumberNan) {
		clickBtn.innerHTML = 0;
	} else {
		// TODO 6: incrementiamo il valore precedente
		clickBtnInnerToNumber++;
		// TODO 7: salviamolo in innerHTML;
		clickBtn.innerHTML = clickBtnInnerToNumber;
	}
};

// TODO 8: inseriamo una function dentro l'evento onclick di resetBtn e per ogni click impostiamo innerHTML di clickBtn a "0";
resetBtn.onclick = () => {
	clickBtn.innerHTML = 0;
};
