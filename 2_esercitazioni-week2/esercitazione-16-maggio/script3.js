// TODO 3: Data una parola stampiamo in console la parola al rovescio. Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi...
/*
...
constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()
...
*/

/***************************************************************************/

userInput = prompt("Scrivi una parola:");

const isUserInputNotValid = typeof(userInput) !== "string";

if (isUserInputNotValid){
    alert("La parola non è valida!");
    window.location.reload();
}

const isUserInputLengthNotValid = userInput.length < 3;

if (isUserInputLengthNotValid){
    alert("La parola deve essere di almeno 3 caratteri!");
    window.location.reload();
}

console.log(userInput);
// console.log(isUserInputNotValid);
// console.log(isUserInputLengthNotValid);

const wordArray = userInput.split("");
console.log(wordArray);

const wordArrayReverse = wordArray.reverse();
console.log(wordArrayReverse);

const wordReverse = wordArrayReverse.join("");
console.log(wordReverse);

// avevo dimenticato di copiare le ultime righe... devo stare più attenta con i copia e incolla t.t