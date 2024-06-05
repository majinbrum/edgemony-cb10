// TODO 1: Scriviamo ed eseguamo una funzione che permetta di fare rapidamente un console.clear()
function clear() {
	console.clear();
}

// TODO 2: Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.
function capitalize(string) {
	if (typeof string !== "string") {
		console.warn("Devi passare una stringa valida!");
		return "";
	}

	const firstLetter = string.at(0).toUpperCase();
	const rest = string.substring(1).toLowerCase();

	return `${firstLetter}${rest}`;
}

console.log(capitalize("ciao")); // Ciao
console.log(capitalize("mondo")); // Mondo
console.log(capitalize("Mondo")); // Mondo
console.log(capitalize("TEST")); // Test

// TODO 3: Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:
// return Math.min(x, y);
function min(x, y) {
	if (typeof x !== "number" || typeof y !== "number") {
		console.warn("Dovresti passare un numero!");
		return NaN;
	}

	// return (x < y) ? x : y;

	if (x < y) {
		return x;
	}

	return y;
}

console.log(min(1, 3)); // 1;
console.log(min(5, -3)); // -3;
console.log(min(100, 20)); // 20;

// TODO 4: Scriviamo una function potenza che accetta due parametri: base ed esponente. Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente
// bonus point prevediamo anche l'elevamento a potenza con esponente 0.
// return Math.pow(base, esponente);

// modo 1
function potenza(base, esponente) {
	// checkType(base, "number");
	// checkType(esponente, "number");

	let output = base;

	for (let i = 2; i <= esponente; i++) {
		output *= base;
	}

	return output;
}

// modo 2
/*
function potenza(base, esponente) {

	let output = 1;

	for (let i = 0; i < esponente; i++) {
		output *= base;
	}

	return output;
}
*/

// modo 2
/*
function potenza(base, esponente) {
  if (esponente === 0) return 1;
  
	let output = 1;

	for (let i = 1; i <= esponente; i++) {
		output *= base;
	}

	return output;
}
*/

// output:
console.log(potenza(4, 2)); // 16
console.log(potenza(5, 3)); // 125
console.log(potenza(1, 100)); // 1

// funzione per controllare input
function checkType(input, type) {
	if (typeof input === type) {
		return true;
	}

	// throw new Error(`${input} deve essere di tipo ${type}`);
	return false;
}

// funzione dei log in un progetto "vero"
function log(message) {
	if (process.env.environment === "DEV") {
		console.log(message);
	}
}

// Possiamo scrivereuna function o var in fondo al file ed usarla su
// Hoisting: capacità di JS di portare in cima al file le dichiarazioni di var/functions

prova();
