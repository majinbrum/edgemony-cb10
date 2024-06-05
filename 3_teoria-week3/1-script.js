// --- Objects
// Sono un tipo di dato che trova il suo utilizzo nel raggruppare valori tramite "chiavi"

const luca = {
	firstName: "Luca", // coppia chiave - valore = proprietà
	// chiave: "firstName", valore: "Luca", proprietà: "firstName"
	lastName: "Pagliaro",
	age: 29,
	skills: ["Javascript"],
	address: {
		city: "Catania",
		zipcode: "95100",
	},
};

console.log(luca);

console.log(luca["firstName"]); // Luca
console.log(luca.firstName); // Luca

console.log(luca["address"]["zipcode"]); // 95100
console.log(luca.address.zipcode); // 95100

/************************** contenitore vuoto ***********************************/
console.clear();

const object = {}; // contenitore vuoto
console.log(object);
// posso modificarlo dopo? spoiler: sì
object["firstName"] = "Pippo";
console.log(object);
object["LastName"] = "Baudo";
console.log(object);
object.currentlyInActivity = true; // stessa cosa di: object["currentlyInActivity"] = true;
console.log(object);
// se in console guardo il log a riga 27 (quando l'object era vuoto) nella preview vedo l'object vuoto, se invece apro il menu a tendina mi fa vedere anche tutte le altre aggiunte successivamente
// questo perché l'object è un indirizzo di memoria

console.log("has obj an age property?", object.hasOwnProperty("age"));
object.age = "matusalemme";
console.log("has obj an age property?", object.hasOwnProperty("age"));
console.log("has obj an age property?", "age" in object); // negli oggetti si riferisce a una proprietà

const array = [0, 3, -1];
console.log(array);
console.log(1 in array); // negli array si riferisce all'indice (in questo caso stampa 3)

/************************** parentesi sugli array ***********************************/

const ultimo = array.at(-1); // valore -1
const last = array[-1]; // indice -1 che non esiste
console.log(`array.at(-1) cerco il valore: ${ultimo}`);
console.log(`array[-1] cerco l'indice che non esiste: ${last}`);

/************************** parentesi sugli array ***********************************/

// per cancellare proprietà
delete object.age; // cancella sia l'indice, sia il valore
object.age = undefined; // semanticamente non corretto, ma funziona uguale

/************************** for...in ***********************************/

console.clear();

// usiamo for...in negli oggetti
for (let key in luca) {
	console.log(`key in luca: ${key}`);

	// "firstName"
	const value = luca[key];
	console.log(`per ogni key prendiamo il valore che sta dentro luca alla chiave...: ${key}: ${value}`);
}

// usiamo for...in anche negli array
for (let index in array) {
	console.log(`index in array: ${index}`);
}

// usiamo for...of negli array
for (let value of array) {
	console.log(`value of array: ${value}`);
}
