// TODO 1: Direzioni
// Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

// nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"

/*
function indicazioni(...directions) {
	const validDirections = ["su", "giù", "sinistra", "destra"];
	for (let direction of directions) {
		if (validDirections.includes(direction)) {
			console.log(direction);
		}
	}
}

indicazioni("su", "su", "sinistra");
*/

// output:
// 'su'
// 'su'
// 'sinistra'

/***************************ESERCIZIO2***************************/

// TODO 2: Contare le direzioni
// scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.

/*
function contaIndicazioni(...directionsInput) {
	const validDirections = ["su", "giu", "sinistra", "destra"];
	const directions = { su: 0, giu: 0, sinistra: 0, destra: 0 };

	// fare un ciclo per ogni direction...
	for (let direction of directionsInput) {
		if (validDirections.includes(direction)) {
			directions[direction]++;
		}
	}

	return directions;
}

console.log(contaIndicazioni("su", "su", "sinistra", "giu", "destra", "giu"));
*/

/*************************** ESERCIZIO2 remake senza array perché abbiamo già l'oggetto ***************************/

// TODO 2: Contare le direzioni
// scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.

function contaIndicazioni(...directionsInput) {
	const directions = { su: 0, giu: 0, sinistra: 0, destra: 0 };

	// fare un ciclo per ogni direction...
	for (let direction of directionsInput) {
		// se direction esiste nell'oggetto directions...
		if (direction in directions) {
			directions[direction]++;
		}
	}

	return directions;
}

console.log(contaIndicazioni("su", "su", "sinistra", "giu", "destra", "giu"));

/*************************** ESERCIZIO2 remake, controllo con l'array, dati da input all'oggetto ***************************/
