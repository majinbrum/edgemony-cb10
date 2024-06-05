// Nome e Cognome

// Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
// Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile;
const userFirstName = prompt(`Your name:`); // null | string
const userLastName = prompt(`Your last name:`);

// Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;

// userFirstName !== null && userFirstName.length > 2
// typeof userFirstName === "string" && userFirstName.length > 2

const isFirstNameNotValid = typeof userFirstName !== "string";
if (isFirstNameNotValid) {
	alert(`Write a valid name`);
}

const isFirstNameLengthNotValid = userFirstName.length < 3;
if (isFirstNameLengthNotValid) {
	alert(`Your name must be at least 3 chars long!`);
	window.location.reload();
}

const isLastNameNotValid = typeof userLastName !== "string";
if (isFirstNameNotValid) {
	alert(`Write a valid last name`);
}

const isLastNameLengthNotValid = userLastName.length < 3;
if (isLastNameLengthNotValid) {
	alert(`Your last name must be at least 3 chars long!`);
	window.location.reload();
}

const firstNameFirstLetter = userFirstName.at(0).toUpperCase();
const firstNameWithoutFirstLetter = userFirstName.slice(1).toLowerCase();

const fullName = `${firstNameFirstLetter}${firstNameWithoutFirstLetter}`;

const LastNameFirstLetter = userLastName.at(0).toUpperCase();
const LastNameWithoutFirstLetter = userLastName.slice(1).toLowerCase();

const fullLastName = `${LastNameFirstLetter}${LastNameWithoutFirstLetter}`;

// Mostriamo tramite alert "Ciao + [Nome] + [Cognome]"
alert(`Ciao ${fullName} ${fullLastName}`);
