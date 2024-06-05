//******************************ESERCIZIO 3******************************//

// TODO 3 (Opzionale): proviamo a creare una modale che verrà creata al click di un button messo a DOM, dentro questa modale monteremo 3 elementi cliccabili, 2 button "YES" / "NO" che al click faranno un semplice console log, e un bottone close per chiudere la modale
// TODO 4 (Opzionale): inseriamo pure un bel setTimeout e fate chiudere la modale ad ogni modo dopo 5000ms
// TODO 5 (Opzionale): vogliamo mostrare il timer dei 5 secondi prima della chiusura della modale? proviamoci
// TODO 6 (Opzionale - Per i pazzi): Volete provare ad esplorare gli eventi dell'eventListener? perchè non provate a vedere come leggere il valore del campo input tramite un eventListener? provate a mettere un campo input che all'inserimento di qualcosa, al click vi apre la modale con un messaggio legato a quello che avete inserito al campo input

const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const runClock = () => {
	setInterval(() => {
		const date = new Date();

		const formattedTime = new Intl.DateTimeFormat("it-IT", {
			hour: "2-digit",
			minute: "2-digit",
			// second: "2-digit",
		}).format(date);
		timeEl.textContent = formattedTime;

		const formattedDate = new Intl.DateTimeFormat("it-IT", {
			weekday: "short",
			day: "numeric",
			month: "long",
		})
			.format(date)
			.split(" ")
			.map((el) => `${el[0].toUpperCase()}${el.slice(1)}`)
			.join(" ");
		dateEl.textContent = formattedDate;

		// console.log(date);
	}, 1000);
};
runClock();

//** MODALE **//

const whatsappBtn = document.querySelector(".whatsapp-icon img");
const notificationDiv = document.querySelector(".notification-div");

const modaleContainer = document.querySelector(".modale-container");
const modaleDiv = document.querySelector(".modale-div");
const notificationArrow = document.querySelector(".notification-arrow");

const modaleButtonsDiv = document.querySelector(".modale-buttons");
const rispondiBtn = document.querySelector(".modale-buttons .rispondi");
const chiudiBtn = document.querySelector(".modale-buttons .chiudi");

notificationDiv.addEventListener("click", (event) => {
	switch (event.target) {
		case whatsappBtn:
			whatsappBtn.style.display = "none";
			modaleContainer.style.display = "flex";
			modaleDiv.style.display = "flex";
			break;

		case notificationArrow:
			modaleButtonsDiv.style.display = "flex";
			break;

		case chiudiBtn:
			modaleContainer.style.display = "none";
			console.log("Messaggio segnato come letto!");
			break;

		case rispondiBtn:
			console.log("Domani sistemo tutto e aggiusto il funzionamento e i controlli!");
			modaleContainer.style.display = "none";
			break;

		default:
			console.error("Stai cliccando nel punto sbagliato!");
			break;
	}
});
