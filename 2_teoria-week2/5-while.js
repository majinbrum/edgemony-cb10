// While
// viene premiato nel momento in cui dentro il body abbiamo un booleano e sappiamo che quella variabile cambierà a un certo punto per x altri motivi
// (quando magari dobbiamo controllare insistentemente se una variabile è diventata true o false: fino a quando quella variabile non è diventata vera controlliamo qualcosa)

let i = 0;

// prima controlla e poi esegue, non esegue se la condizione non passa (come il for)
while (i < 3) {
	console.log("while value:", i);
	i++;
}

// for (let i = 0; i < 3; i++) {...}

//* do while
// variante in cui prima viene eseguito il body, e poi controllata la condition prima di ciclare nuovamente
// tendenzialmente abbandonata
let result = "";
let i = 0;

do {
	i = i + 1;
	result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

// *break;
// quiz con il for:

const domande = [`Capitale d'Italia`, `Presidente della Repubblica`, `Anno vittoria ultimo mondiale per l'Italia`];

const risposte = [`Roma`, `Mattarella`, `2006`];

const totDomande = domande.length;
let score = 0;

for (let indice = 0; indice < totDomande; indice++) {
	const domandaCorrente = domande.at(indice);
	const rispostaCorretta = risposte.at(indice);

	const risposta = prompt(domandaCorrente);
	const punteggioDomanda = risposta === rispostaCorretta ? 3 : -1;

	score += punteggioDomanda;
	console.log(`${domandaCorrente} - ${risposta} - ${punteggioDomanda}`);
	// * QUI
	if (score < 0) {
		console.log("Forse dovresti ripassare");
		break;
	}
}

console.log("punteggio complessivo:", score);

// * opposto di break: continue;
// interrompe l'esecuzione del body corrente e passa alla prossima esecuzione

for (let i = 0; i <= 10; i++) {
	// (non ha senso, metteremmo i < 9, però è per capire break vs continue)
	if (i === 9) {
		// interrompe sia l'esecuzione del body attuale sia quelle della rimanenza del for
		break;
	}

	if (i % 2 !== 0) {
		continue;
	}
	// skippa tutti i numeri dispari

	// se è partito il continue questo non verrà eseguito:
	console.log("indice i:", i);
}
