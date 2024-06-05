// TODO 1: Dato questo object:
const coder = {
	firstName: "Luca", // coppia chiave - valore : "firstName" - "Luca"
	lastName: "Pagliaro",
	age: 29,
	skills: ["JavaScript", "HTML", "CSS"],
	address: {
		city: "Catania",
		zipCode: "95100",
	},
};

// TODO 2: vorrei scrivere del codice che possa:
//// stampare un console.log per ogni skill presente in coder.skills
for (let skill of coder.skills) {
	console.log(`Skill: ${skill}`);
}

// TODO 3: salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street". Eseguiamo poi un console.log per controllare tutto sia OK.
coder.address["country"] = prompt("Your country:");
coder.address["street"] = prompt("Your street:");
console.log(coder.address);
console.log(`${coder.address}`); //perché non funziona?

// TODO 4: Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
for (let coderKey in coder) {
	console.log(`Key: ${coderKey}`);

	// TODO 5: Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
	const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
	const value = coder[coderKey];
	if (vowels.includes(coderKey[0])) {
		console.log(`${coderKey} starts with vowel: ${value}`);
	}
}

// TODO 6: Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.
const newCoderKey = prompt("New key:");
const newCoderKeyValue = prompt("New value:");
coder[newCoderKey] = newCoderKeyValue;
console.log(`${coder}`);
