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


switch(userAnswer){
	case "Marte":{
		score+=3;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta corretta!`)
		break;
	}

	case "Giove":
	case "Venere":
	case "Saturno":{
		score--;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta errata!`)
		break;
	}

	default:{
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, qualcosa è andato storto!`)
		break;
	}
}

/***********************************************************************************/

userAnswer = prompt(`Chi ha scritto "La Divina Commedia"?
Giovanni Boccaccio
Francesco Petrarca
Dante Alighieri
Ludovico Ariosto`);


switch(userAnswer){
	case "Dante Alighieri":{
		score+=3;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta corretta!`)
		break;
	}

	case "Giovanni Boccaccio":
	case "Francesco Petrarca":
	case "Ludovico Ariosto":{
		score--;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta errata!`)
		break;
	}

	default:{
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, qualcosa è andato storto!`)
		break;
	}
}

/***********************************************************************************/

userAnswer = prompt(`Qual è la capitale del Giappone?
Pechino
Seul
Tokyo
Bangkok`);


switch(userAnswer){
	case "Tokyo":{
		score+=3;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta corretta!`)
		break;
	}

	case "Pechino":
	case "Seul":
	case "Bangkok":{
		score--;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta errata!`)
		break;
	}

	default:{
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, qualcosa è andato storto!`)
		break;
	}
}

/***********************************************************************************/

userAnswer = prompt(`Quale invenzione è attribuita a Thomas Edison?
Il telefono
La lampadina elettrica
La macchina a vapore
Il telegrafo`);


switch(userAnswer){
	case "La lampadina elettrica":{
		score+=3;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta corretta!`)
		break;
	}

	case "Il telefono":
	case "La macchina a vapore":
	case "Il telegrafo":{
		score--;
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, risposta errata!`)
		break;
	}

	default:{
		userAnswers.push(userAnswer);
		console.log(`${userAnswer}, qualcosa è andato storto!`)
		break;
	}
}

// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
alert(`Il tuo punteggio è ${score}!`);

// Quando diamo il risultato finale, mostriamo anche tutte le risposte date dall'utente dentro un solo console.log e dentro mettiamo anche la lunghezza del nostro array
console.log(`${userAnswers.length} risposte date dall'utente: ${userAnswers}`)