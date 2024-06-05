// TODO 3: Data una parola stampiamo in console la parola al rovescio. Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi...
/*
...
constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()
...
*/

/***************************************************************************/

const string = "ciao";
const chars = string.split(""); // [c i a o]
const reverseChars = chars.reverse(); // [o a i c]
const reverseString = reverseChars.join(""); // "oaic"

console.log(string.split("").reverse().join("")); // "oaic"

const isPalindromo = string === reverseString;
console.log(isPalindromo ? `${string} è palindromo` : "ritenta con una parola palindroma");