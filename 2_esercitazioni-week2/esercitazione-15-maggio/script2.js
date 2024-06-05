// Quizzone - Qui usiamo lo switch dove possibile

// Creiamo una variabile let score = 0;
let score = 0;

// Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;

const userAnswer1 = prompt(`Quale pianeta è noto come il "pianeta rosso"?`);
console.log(`userAnswer1: ${userAnswer1}`);

const userAnswer2 = prompt(`Chi ha scritto "La Divina Commedia"?`);
console.log(`userAnswer2: ${userAnswer2}`);

const userAnswer3 = prompt(`Qual è la capitale del Giappone?`);
console.log(`userAnswer3: ${userAnswer3}`);

const userAnswer4 = prompt(`Quale invenzione è attribuita a Thomas Edison?`);
console.log(`userAnswer4: ${userAnswer4}`);

// Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;

switch (userAnswer1) {
	case "Marte": {
		score += 3;
		console.log(`userAnswer1 is correct: ${userAnswer1}`);
		console.log(score);
		break;
	}

	case "marte": {
		score += 3;
		console.log(`userAnswer1 is correct: ${userAnswer1}`);
		console.log(score);
		break;
	}

	default: {
		score--;
		console.log(`userAnswer1 is wrong: ${userAnswer1}`);
		console.log(score);
	}
}

switch (userAnswer2) {
	case "Dante": {
		score += 3;
		console.log(`userAnswer2 is correct: ${userAnswer2}`);
		console.log(score);
		break;
	}

	case "Dante Alighieri": {
		score += 3;
		console.log(`userAnswer2 is correct: ${userAnswer2}`);
		console.log(score);
		break;
	}

	case "dante": {
		score += 3;
		console.log(`userAnswer2 is correct: ${userAnswer2}`);
		console.log(score);
		break;
	}

	case "dante alighieri": {
		score += 3;
		console.log(`userAnswer2 is correct: ${userAnswer2}`);
		console.log(score);
		break;
	}

	default: {
		score--;
		console.log(`userAnswer2 is wrong: ${userAnswer2}`);
		console.log(score);
	}
}

switch (userAnswer3) {
	case "Tokyo": {
		score += 3;
		console.log(`userAnswer3 is correct: ${userAnswer3}`);
		console.log(score);
		break;
	}

	case "tokyo": {
		score += 3;
		console.log(`userAnswer3 is correct: ${userAnswer3}`);
		console.log(score);
		break;
	}

	default: {
		score--;
		console.log(`userAnswer3 is wrong: ${userAnswer3}`);
		console.log(score);
	}
}

switch (userAnswer4) {
	case "Lampadina Elettrica": {
		score += 3;
		console.log(`userAnswer4 is correct: ${userAnswer4}`);
		console.log(score);
		break;
	}

	case "lampadina elettrica": {
		score += 3;
		console.log(`userAnswer4 is correct: ${userAnswer4}`);
		console.log(score);
		break;
	}

	case "Lampadina": {
		score += 3;
		console.log(`userAnswer4 is correct: ${userAnswer4}`);
		console.log(score);
		break;
	}

	case "lampadina": {
		score += 3;
		console.log(`userAnswer4 is correct: ${userAnswer4}`);
		console.log(score);
		break;
	}

	default: {
		score--;
		console.log(`userAnswer4 is wrong: ${userAnswer4}`);
		console.log(score);
	}
}

// Alla fine delle 4 domande mostriamo il pungeggio complessivo;
if (score < 12 && score > 5) {
	alert(`Your score is: ${score}, good job!`);
} else if (score <= 5) {
	alert(`Your score is: ${score}, ugh...`);
} else {
	alert(`Your score is: ${score}, you're the new Champ!`);
}
