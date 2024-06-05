// Approfondimento functions

function func() {
	// ...
}
console.log(func);

/****************************** funzione anonima ******************************/

// richiamare funct() qui darebbe errore, perché siamo sotto le costrizioni di una "const"

// * per richiamarla possiamo possiamo salvarla dentro una variabile
// non si utilizza molto
const funct = function () {
	console.log("funzione anonima");
};

console.log(funct); // invoco la function dentro la mia variabile

funct(); // invoco la function dentro la mia variabile

// è come fare...

// * "Self calling function"
// il cui vero vantaggio è avere un ambiente chiuso:
(function () {
	const funct = "ciao";
	console.log("funct", funct);

	console.log("funzione anonima");
})();

// * arguments
// posso accedere alla keyword "arguments" (che crea un oggetto iterabile usando for...of) riservata solo alle functions di questo tipo, in cui uso la parola function all'inizio

(function () {
	function log() {
		console.log(arguments);
		const messages = Array.from(arguments); // array from converte un iterabile ad array
		console.log(messages.join(" "));
	}

	console.log("ciao", "mondo", "!");
	log("ciao", "mondo", "!");
})();

/************************************************************/

// * per poter leggere tutti i parametri di una function posso usare:
// TODO 0: -"arguments" che mi torna un iterabile
function sum() {
	let output = 0;

	for (let number of arguments) {
		output += number;
	}

	return output;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); //36

// TODO 1: -"arguments" trasformato in array
function sum() {
	const numbers = Array.from(arguments);
	let output = 0;

	for (let number of numbers) {
		output += number;
	}

	return output;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); //36

// TODO 2: -metto nei parametri "(...miaVariabile") e miaVariabile diventa un array con tutti i parametri passati
// * "REST/SPREAD OPERATOR"
// "..." ha come nome quello di "Rest operator" o "Spread operator" in base al suo utilizzo (prende tutti gli argomenti e li accorpa in un solo array, oppure li spalma tutti in una lista)
function sum(...numbers) {
	let output = 0;

	for (let number of numbers) {
		output += number;
	}

	return output;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); //36

/************************************************************/

// torniamo alle functions anonime

(function () {
	//* Function anonime
	const classic = function () {
		"ciao sono una function anonima classica";
	};

	// ES6 >=
	//* Arrow functions
	// sono sempre anonime, per cui omettiamo il nome
	// la keyword "function" non serve ma si capisce che è una func perché abbiamo "=>"
	// viene fatto un return di quello che sta dopo la freccia "=>"
	// essendo una const vale la regola del non poterla chiamare prima
	// non abbiamo arguments
	// non è un ambiente 100% isolato
	const arrow1 = (a, b) => a + b;
	// è come fare:
	function classicSum(a, b) {
		return a + b;
	}
	console.log(arrow1(1, 2)); //3
	console.log(classicSum(1, 2)); //3

	/***********/

	// posso usare le {} dopo la "=>", ma così perdo il return implicito e dovrò dichiararlo io
	const arrow2 = (a, b) => {
		console.log(a, b);
		return a + b;
	};

	// return implicito di un object
	const chiSei = () => ({ firstName: "luca" });
	console.log(chiSei());
})();

/************************************************************/

// * DOM Document Object Model

// document.body è un object che si riferisce al <body> della pagina
// posso modificarlo come un object normale, conoscendo ovviamente le sue chiavi o usando console.dir(document.body)
document.body.className = "bg-black";
document.body.style.backgroundColor = "rebeccapurple";
document.body.style.color = "white";
document.body.style.padding = "2rem";
document.body.innerHTML = "<h1>Ciao Mondo!;</h1>";

document.body.style.minHeight = "100dvh";
// 100dvh misura esattamente lo spazio disponibile sul browser senza considerare barra di navigazione etc

let message = "ciao";
document.body.onclick = function () {
	console.log(message);
};
