// TODO 2: Palindromi
// abbiamo visto come si trova una parola palindroma, ma non l'abbiamo fatto in modo efficente. Quello che dovremo fare invece è:
// prendere una parola dall'utente tramite prompt, scomporla in array ed usare un for per poter controllare se è palindroma.

// const userWord = "anna".split("");
// const userWord = "palermo".split("");
// const userWord = "i topi non avevano nipoti".replaceAll(" ", "").split("");
const userWord = prompt("Scrivi una parola per vedere se è un palindromo:").split("");

for (let i = 0; i < userWord.length; i++) {
	const userWordLetter = userWord[i];
	const userWordOppositeLetter = userWord[userWord.length - i - 1];

	console.log(`${userWordLetter} === ${userWordOppositeLetter}`);

	if (userWordLetter === userWordOppositeLetter) {
		if (i === userWord.length - 1) {
			// b) se nell'ultimo carattere della parola non abbiamo riscontrato errori stampiamo un console.log con "Successo! è un palindromo!"
			console.log(`${userWord.join("")} è un palindromo!`);
		}
	} else {
		// a) nel caso in cui non troviamo corrispondenza usciamo dal for e stampiamo in console.log un messaggio.
		console.log(`${userWord.join("")} non è un palindromo!`);
		break;
	}
}

// tips: ogni carattere è uguale al suo elemento specchio nella parola elemento ad indice 0 === elemento ad indice fine meno -1 elemento ad indice 1 === elemento ad indice fine meno -2 elemento ad indice i === elemento ad indice fine meno (i * -1) -1 /// length - i - 1

`
for(){

    if( elemento corrisponde a...){}

    isLast = index === length -1;

    if(elemento è l'ultimo dell'array...){

    }
}
`;
