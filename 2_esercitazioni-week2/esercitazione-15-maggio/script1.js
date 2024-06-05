// Nome e Cognome

// Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
const userFirstName = prompt(`Your name:`);

// Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;
const userLastName = prompt(`Your last name:`);

// Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
if (userFirstName.length < 3) {
	alert(`Your name must be at least 3 chars long!`);
	window.location.reload();
} else if (userLastName.length < 3) {
	alert(`Your last name must be at least 3 chars long!`);
	window.location.reload();
} else {
	const userFirstName_firstLetter = userFirstName[0].toUpperCase();
	const userFirstName_withoutFirstLetter = userFirstName.slice(1, userFirstName.length).toLowerCase();
	const userFirstName_capitalized = userFirstName_firstLetter + userFirstName_withoutFirstLetter;

	const userLastName_firstLetter = userLastName[0].toUpperCase();
	const userLastName_withoutFirstLetter = userLastName.slice(1, userLastName.length).toLowerCase();
	const userLastName_capitalized = userLastName_firstLetter + userLastName_withoutFirstLetter;

	console.log(`userFirstName_capitalized, ${userFirstName_capitalized}`);
	console.log(`userLastName_capitalized, ${userLastName_capitalized}`);

	alert(`Hello, ${userFirstName_capitalized} ${userLastName_capitalized}`);
}
