// TODO 4: Bonus: Ripasso Array
// Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

// esempio: a = 1; b = 2;

const indexForEachLetter = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
};

const string = "Rosso di sera, bel tempo si spera";

function alphabetPosition(string) {
	let output = [];

	string = string.toLowerCase().replace(/[\s,]/g, "");

	for (letter of string) {
		const letterValue = indexForEachLetter[letter];
		output.push(letterValue);
	}

	return output.join(" ");
}

console.log(alphabetPosition(string)); // output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

/*************/

/* tips:

const indexForEachLetter = {
    a: 1,
}
const input = 'Rosso di sera, bel tempo si spera';


function alphabetPosition(string){
    let output = '';

    for(let letter of string){
        const value = indexForEachLetter[...];

    }

    return output;    
}
*/

/***********************remake**********************/
/*
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// mettendo (string = "") diciamo che se string non viene passato, ha come valore di default stringa vuota
function alphabetPosition(string = "") {
	let output = "";
	string = string.toLowerCase();

	for (char of string) {
		const indexOfChar = alphabet.indexOf(char);
		// const isValid = indexOfChar > -1;

		if (indexOfChar > -1) {
			output += (indexOfChar + 1) + " ";
		} else {
			output += char;
		}

		// output += (isValid) ? ((indexOfChar + 1) + " ") : char;
	}

	return output;
}

console.log(alphabetPosition("Rosso di sera, bel tempo si spera")); // output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"
*/