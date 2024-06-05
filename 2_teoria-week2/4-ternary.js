// ternario
// l'operatore ternario non è altro che una shorthand per un if
const condition = true;

// assegnamo in modo condizionale un valore o l'altro: se true (?) -> Luca; altrimenti (:) -> Ignazio
const name = (condition ? "Luca" : ("Ignazio"));

// assegnamo in modo condizionale una operazione o l'altra
condition
  ? console.log("Hello world")
  : console.log("Addio mondo :(");

// Si possono mettere operatori ternari dentro altri operatori ternari: ma non fatelo per favore, altrimenti muore una fata.
const age = 13;
const scuola = (age < 10) ? "Elementari" : (age < 14 ? "Medie" : "Superiori");
console.log(scuola); // Medie

const inputFirstName = "Luca";
if (typeof inputFirstName !== "string" || inputFirstName.length < 3) {
	const isNameString = typeof inputFirstName !== "string";
	const message = isNameString ? "Devi inserire almeno 3 caratteri" : "Devi inserire un valore";

	console.log(message);
}

// esempio del quizzone usando il ternario
let risposta;
let score = 0;

risposta = prompt("Capitale d'Italia?");
score += (risposta === "Roma") ? 3 : -1;

risposta = prompt("Migliore amico dell\'uomo?");
score += (risposta === "Cane") ? 3 : -1;

console.log(score);