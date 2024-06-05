// TODO 2: Raccogliamo tramite prompt (eseguito tre volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.

/*
const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

let userWord = prompt("Scrivi la prima parola:");
(vowels.includes(userWord[0])) ? console.log("vocale") : console.log("consonante");

userWord = prompt("Scrivi la seconda parola:");
(vowels.includes(userWord[0])) ? console.log("vocale") : console.log("consonante");

userWord = prompt("Scrivi la terza parola:");
(vowels.includes(userWord[0])) ? console.log("vocale") : console.log("consonante");
*/

/********************************* oppure *******************************/

const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

let userWord = prompt("Scrivi la prima parola:");
let isFirstLetterVowel = vowels.includes(userWord[0]);
isFirstLetterVowel ? console.log("vocale") : console.log("consonante");

userWord = prompt("Scrivi la seconda parola:");
isFirstLetterVowel = vowels.includes(userWord[0]); // Update the check
isFirstLetterVowel ? console.log("vocale") : console.log("consonante");

userWord = prompt("Scrivi la terza parola:");
isFirstLetterVowel = vowels.includes(userWord[0]); // Update the check
isFirstLetterVowel ? console.log("vocale") : console.log("consonante");