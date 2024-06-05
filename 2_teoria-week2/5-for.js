// For - While

// *Condizione iniziale; Condizione di uscita; Cosa eseguire alla fine di ogni loop
// *Questo for si legge testualmente così:
// -data una variabile i=0;
// -fino a quando i < 3;
// -voglio eseguire il codice del corpo del for
// -alla fine sommare i += 1;
// -controllare se i < 3;
// -se i < 3 eseguire corpo;
// -aumentare i di 1;

console.log("prima del for!");

for (let i = 0; i < 3; i++) {
	console.log("valore attuale:", i);
}

console.log("fine del for!");

console.log("prima del countdown!");

for (let i = 10; i >= 0; i--) {
	console.log("valore attuale:", i);
}

console.log("fine del countdown!");

// quiz con il for:

const domande = [`Capitale d'Italia`, `Presidente della Repubblica`, `Anno vittoria ultimo mondiale per l'Italia`];

const risposte = [`Roma`, `Mattarella`, `2006`];

const totDomande = domande.length;
let score = 0;

for (let indice = 0; indice < totDomande; indice++) {
	// 0 -> domande[0]
	// indice++;
	// 1 -> domande[1]
	// indice++;
	// 2 -> domande[2]
	// indice++;
	// --- qui indice diventa 3 e non è più possibile entrare dentro il corpo del for.

	const domandaCorrente = domande.at(indice);
	const rispostaCorretta = risposte.at(indice);

	const risposta = prompt(domandaCorrente);
	const punteggioDomanda = risposta === rispostaCorretta ? 3 : -1;

	score += punteggioDomanda;
	console.log(`${domandaCorrente} - ${risposta} - ${punteggioDomanda}`);
}

console.log("punteggio complessivo:", score);

// Esempio di for nested
const array1 = [1, 2, 3, [1, 2, 3]];

for (let i = 0; i < array1.length; i++) {
	const item = array1[i];
	console.log("array item", item);

	if (Array.isArray(item)) {
		console.log("item è un array"); // array item (3) [1,2,3] item è un array

		// item = [1,2,3]; // length -> 3;

		for (let innerIndex = 0; innerIndex < item.length; innerIndex++) {
			console.log("inner item", item[innerIndex]);
		}
	}
}

/******************************************************************/

const array2 = [1, 2, 3, [1, 2, 3]];

let newArray = [];

for (let i = 0; i < array2.length; i++) {
	const item = array2[i];
	console.log("array item", item);

	if (Array.isArray(item)) {
		newArray = newArray.concat(item);
	} else {
		newArray.push(item);
	}
}

console.log(newArray);
