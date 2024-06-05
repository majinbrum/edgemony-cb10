// Array :)
// rappresentiao un insieme ordinato di elementi di qualsiasi natura. Non sono un tipo di dato primitivo.

const primitiva = 0;
console.log(primitiva === 0); // true

/*
const array = [];
console.log(array === []); // false: entrambe non contengono niente, ma non sono la stessa "scatola" (vedi suggerimento IDE). L'indirizzo di memoria dei due array è sempre diverso sebbene abbiamo lo stesso contenuto.
*/

/*
const array1 = [];
const array2 = [];
const array3 = array1; // il valore viene copiato per referenza (indirizzo di memoria)

array1 === array2; // false
array1 === array3; // true
array2 === array3; // false
*/

const array = [-1, 0, 1, 2, 3, false, "ciao", null, [0, 1, 2]]; // può avere tipi uguali o diversi al suo interno, l'importante è che siano separati da virgola

// voglio prendere il primo elemento di un array: 
const firstItem = array.at(0); // -1 
const firstItem2 = array[0]; // -1

array.length // lunghezza dell'array

const stringInArray = array[6];

console.log(array);
console.log("array length", array.length);
console.log("string in array length", stringInArray.length);

// array.push() - array.join()

// Esercizi:

/*

// TODO 1: Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
- Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
- Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array (quante risposte ci ha dato) 

...
const risposte = []; // salviamo tutte le risposte
let score = 0;
let risposta;

risposta = ...;
// aggiungere al nostro array di risposte;
...

console.log() // mostriamo tutte le risposte

-------

// TODO 2: Raccogliamo tramite prompt (eseguito 3 volte) 3 parole dall'utente, per ogni parola ricevuta mostriamo in console "vocale" o "consonante" in base alla prima lettera. Usiamo un solo console.log per ogni parola sfruttando la potenzialità dell'operatore ternario.

-------

// TODO 3: Data una parola stampiamo in console la parola al rovescio. Per farlo prima usiamo il metodo split delle stringhe che trasforma una stringa in array e poi controlliamo se esiste un metodo per invertire gli elementi...

...
constr string = prompt('...');

// controlliamo se è una stringa valida prima!

const array = string.split()
...
*/