// Quizzone - Qui usiamo lo switch dove possibile

// Creiamo una variabile let score = 0;;
let score = 0;
const MAX_SCORE = 3;

// Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;

const userAnswer1 = prompt(`Quale pianeta è noto come il "pianeta rosso" tra: venere, marte, saturno, giove?`);

switch (userAnswer1) {
	case "marte":
		score += 3;
		break;

	case "venere":
	case "saturno":
	case "giove":
		score -= 1;
		break;

	default:
		alert("Devi rispondere con una delle 4 opzioni!");
		score -= 1;
}

// Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;

// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
if (score === MAX_SCORE) {
	alert(`Your score is: ${score}, you're the new Champ!`);
}
