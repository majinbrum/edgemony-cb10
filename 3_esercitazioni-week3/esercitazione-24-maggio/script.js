// * Creazioni elementi:
// Aggiungiamo al nostro HTML tramite JS un nuovo elemento h1 e un nuovo elemento paragrafo

// TODO 1: Usiamo il metodo document.createElement per creare l'h1
const h1El = document.createElement("h1");
h1El.innerText = "Hello world!";

// TODO 2: Usiamo il metodo document.createElement per creare il p
const pEl = document.createElement("p");
pEl.innerText = "Hello world! ma più piccolo";

// cerco e salvo il div chiamato div title in cui voglio inserire i miei nuovi elementi
const titleDiv = document.querySelector("div.title");

// TODO 3: Per inserire l'h1 nella pagina usiamo insertAdjacentElement()
titleDiv.insertAdjacentElement("afterbegin", h1El);

// TODO 4: Per inserire il p nella pagina usiamo append()
titleDiv.append(pEl);

/************/

// creo un button
const btnEl = document.createElement("button");
btnEl.innerText = "Sono un button! Cosa nascondo?";
titleDiv.insertAdjacentElement("afterend", btnEl);

btnEl.onclick = function () {
	const btnSmallerEl = document.createElement("button");
	btnSmallerEl.className = "smaller";
	btnSmallerEl.style.fontSize = "0.6rem";
	btnSmallerEl.innerText = "Eheheheheh..... e ora?";
	btnEl.outerHTML = btnSmallerEl.outerHTML;

	if (btnSmallerEl) {
		const btnSmallerEl = document.body.querySelector("button.smaller");

		btnSmallerEl.onclick = function () {
			const pSmallerEl = document.createElement("p");
			pSmallerEl.style.fontSize = "0.4rem";
			pSmallerEl.innerText = "Sono solo un Hello world! ma mooooooooooooooolto più piccolo";
			btnSmallerEl.outerHTML = pSmallerEl.outerHTML;
		};
	}
};

/******************************Esercizio2******************************/

// * Button contatore dinamico:
// TODO 1: Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
const btnCounterEl = document.createElement("button");
btnCounterEl.innerText = 0;
btnCounterEl.style.cursor = "pointer";
pEl.insertAdjacentElement("afterend", btnCounterEl);

// TODO 2: Al button associamo un evento onmouseenter che cambierà lo style del button (sperimentiamo un po');
btnCounterEl.onmouseenter = function () {
	btnCounterEl.style.width = "fit-content";
	btnCounterEl.style.fontSize = "10rem";
	btnCounterEl.style.backgroundColor = "rebeccapurple";
	btnCounterEl.style.color = "#eee";
	btnCounterEl.style.border = "0.5rem solid orange";
	btnCounterEl.style.borderRadius = "1rem";
};

// porto alla normalità onmouseleave
btnCounterEl.onmouseleave = function () {
	btnCounterEl.style.width = "";
	btnCounterEl.style.fontSize = "";
	btnCounterEl.style.backgroundColor = "";
	btnCounterEl.style.color = "";
	btnCounterEl.style.border = "";
	btnCounterEl.style.borderRadius = "";
};

// TODO 3: Al button associamo un altro evento onclick che al click aumenta di uno il numero inserito nel proprio innerHTML;
btnCounterEl.onclick = function () {
	this.innerHTML = Number(this.innerHTML) + 1;

	document.body.querySelector("main").style.position = "relative";
	btnCounterEl.style.position = "absolute";
	btnCounterEl.style.translate = `${Math.random() * 20}rem ${Math.random() * 20}rem`;

	if (this.innerHTML == 21) {
		alert("Enough!!!");
		this.innerHTML = 0;
	}
};

/******************************Esercizio3******************************/

// * Lista di nomi:
// Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:

// // creo un div dove inserire il form
const formDiv = document.createElement("div");
formDiv.className = "formDiv";
document.body.querySelector("main").insertAdjacentElement("beforeend", formDiv);

formDiv.innerHTML = `
<form>
    <div>
        <label for="nomi">Lista nomi e cognomi</label>
        <input 
            id="nomi" 
            name="nomi" 
            type="text" 
            minlength="3" 
            autocomplete="off" 
        />
    </div>

    <button type="submit">Invia</button> 
</form>

<ul class="list"></ul>
`;

const inputEl = document.body.querySelector('input[name="nomi"]');
const formList = document.body.querySelector("ul.list");
formList.style.padding = "0";

// Usiamo JS per inserire all'evento onsubmit una function che:
formDiv.onsubmit = function (event) {
	// previene il comportamento di default del form.
	event.preventDefault();

	// Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
	const isInputValueValid = inputEl.value.length >= 3 && inputEl.value.includes(" ");
	console.log(isInputValueValid);

	if (isInputValueValid) {
		// Se il valore è valido creare un elemento
		const formLi = document.createElement("li");
		formLi.innerText = inputEl.value;

		// e inserirlo dentro l'elemento .list (vedi HTML)
		formList.insertAdjacentElement("beforeend", formLi);

		// stile dei formLi
		formLi.style.width = "fit-content";
		formLi.style.backgroundColor = "#eee";
		formLi.style.fontWeight = "600";
		formLi.style.color = "rebeccapurple";
		formLi.style.padding = "0.8rem 1rem";
		formLi.style.borderRadius = "1rem";

		formLi.style.cursor = "pointer";

		// Aggiungere una function al onclick del nuovo elemento
		formLi.onclick = function () {
			// e stampare un console.log() quando viene eseguito il click.
			console.log(this.innerText);
		};

		// resetto il value dell'input all'invio
		inputEl.value = "";
	} else {
		alert("Assicurati che il nome abbia almeno 3 caratteri e che ci sia almeno uno spazio!");
	}
};

// sorry per il ritardo <3
