// TODO 1: Rifacciamo l'esercizio del quiz di ieri in cui chiediamo all'utente di rispondere a domande a risposta multipla, in particolare però:
// - Raccogliamo tutte le risposte date dall'utente anche dentro un array "risposte";
// - Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
// - Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array (quante risposte ci ha dato) 

const userAnswers = [];
let score = 0;
let userAnswer;

userAnswer = prompt(`Quale pianeta è noto come il "pianeta rosso"?
Giove
Marte
Venere
Saturno`);

score += (userAnswer === "Marte") ? 3 : -1;
userAnswers.push(userAnswer);

/***********************************************************************************/

userAnswer = prompt(`Chi ha scritto "La Divina Commedia"?
Giovanni Boccaccio
Francesco Petrarca
Dante Alighieri
Ludovico Ariosto`);

score += (userAnswer === "Dante Alighieri") ? 3 : -1;
userAnswers.push(userAnswer);

/***********************************************************************************/

userAnswer = prompt(`Qual è la capitale del Giappone?
Pechino
Seul
Tokyo
Bangkok`);

score += (userAnswer === "Tokyo") ? 3 : -1;
userAnswers.push(userAnswer);


/***********************************************************************************/

userAnswer = prompt(`Quale invenzione è attribuita a Thomas Edison?
Il telefono
La lampadina elettrica
La macchina a vapore
Il telegrafo`);

score += (userAnswer === "La lampadina elettrica") ? 3 : -1;
userAnswers.push(userAnswer);

/***********************************************************************************/

// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
alert(`Il tuo punteggio è ${score}!`);

(score === 6) ? alert(`Il tuo punteggio è ${score}, sei un campione!`) : alert(`Il tuo punteggio è ${score}.`)

// Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array
const answersToString = userAnswers.join("", "");
console.log(`${userAnswers.length} risposte date dall'utente: "${answersToString}"`);

/***********************************************************************************/

const answersToHtml = userAnswers.join('<li>\t\n</li>');
console.log(`<ul>
<li>${answersToHtml}</li>
</ul>`)

/************************************* ALTRO METODO *********************************/
const risposte = [];
let punteggio = 0;

// 0°
risposte.push(
	prompt("Dimmi qualcosa")
);
punteggio += (risposte.at(-1)==="ciao") ? 3 : -1;
// at -1 è l'ultimo aggiunto