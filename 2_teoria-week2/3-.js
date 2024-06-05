/******************************************************************************************/

const userNumber = Number(prompt("Dammi un numero da uno a dieci!"));

const MIN_NUMBER = 0;
const MAX_NUMBER = 10;

if (Number.isInteger(userNumber && userNumber <= MAX_NUMBER && userNumber > MIN_NUMBER)) {
	if (userNumber > 7) {
		alert("Hai vinto!");
	} else {
		alert("Ritenta :(");
	}
} else {
	alert("Il numero inserito non è valido.");
}

/******************************************************************************************/

// approccio exit first

// snake case: questa è una costante che deriva da qualche parte e non bisognerebbe toccarla
// const MIN_NUMBER = 0;
// const MAX_NUMBER = 10;

const isNotANumber = Number.isNaN(userNumber);
const isOutOfRange = userNumber <= MIN_NUMBER || userNumber > MAX_NUMBER;

if (isNotANumber || isOutOfRange) {
	console.log("Stai barando!");
} else {
	console.log("Stiamo giocando");

	if (userNumber > 7) {
		console.log("Hai vinto!");
	} else {
		console.log("Hai perso!");
	}
}

/******************************************************************************************/

// così posso controllare che la prima sia vera e che almeno una delle due successive sia vera
// if(true && (false || true))

/******************************************************************************************/

//  Nomenclature e variabili

const _v4riaBl3 = ""; // caratteri accettati
const camelCase = ""; // quello che si usa per tutte le variables

// booleani dovrebbero iniziare con verbi che rispondono a domande
const isUserLoggedIn = true;
const canEditArticle = true;
const shouldEatPizza = true;

if (canEditArticle) {
	console.log("Puoi modificare l'articolo");
}
//

const PamelCase = "o DromedaryCase"; // quello che si usa solo per le Classi

const FIXED_CONSTANT_OR_MAGIC_NUMBER = 3.14; // UPPER snake case ci aiuta ad identificare quei numeri che sono costanti o "magic numbers"
Number.MAX_SAFE_INTEGER; // in hover vediamo che è un numero fisso "intoccabile"

const bigNumber = 9_999_999; // con i numeri possiamo separare le cifre usando l'underscore, questo viene ignorato dal programma

const variable_snake_case = ""; // da evitare
("kebab-case"); // non si può usare per definizione

/******************************************If/Else/Else if + Switch************************************************/

//  If/Else/Else if

const firstName = "Luca";
const nameLength = firstName.length;

// controllare che sia un nome corretto:
//// sia almeno di 3 caratteri,
//// abbia la lettera iniziale maiuscola

const firstLetter = firstName[0];
// alternativa: const firstLetter = firstName.at(0);
// -> copia per valore: avviene per tutti i primitivi string/number/boolean/undefined

const OK_CHARS = "ABCDEFGHILMNOPQRSTUVZ";

const isFirstLetterUpperCase = OK_CHARS.includes(firstLetter);

const isFirstLetterUpperCase2 = firstLetter == firstLetter.toUpperCase(); // .toUpperCase() mi crea una nuova stringa con il valore maiuscolo

// possiamo usare il "!" prima di un valore per poter prendere il valore boolean opposto -> !true == false || !"ciao" == false
const isNotFirstLetterUpperCase = !isFirstLetterUpperCase;
// if(nameLength < 3 &&  isNotFirstLetterUpperCase){
if (nameLength < 3) {
	console.log("Inserire un nome di almeno 3 caratteri");
} else if (isNotFirstLetterUpperCase) {
	console.log("La prima lettera deve essere una maiuscola!");
} else {
	console.log(`Ciao ${firstName}!`);
}

/******************************************If/Else/Else if + Switch************************************************/

//  Switch
//  le parentesi graffe sono facoltative, servono solo per la leggibilità
// in base all'ordine dei case e se non ci sono i break, avvengono le istruzioni successive a cascata

const test = "Samuele";

switch (test) {
	case "Nicola": {
		console.log("Anche Nicola chiede:");
		// se non metto un break viene eseguito anche il successivo
	}
	case "Samuele": {
		console.log("Domanda first letter");
		break;
	}

	case "Lorenzo": {
		console.log("Domanda length");
		break;
	}

	default: {
		console.log("Nessuna domanda");
	}
}

// stessa identica cosa, ma come sintassi più difficile nella lettura
if (test === "Samuele" || test === "Nicola") {
	console.log("Domanda first letter");
} else if (test === "Lorenzo") {
	console.log("Domanda length");
} else {
	console.log("Nessuna domanda");
}
