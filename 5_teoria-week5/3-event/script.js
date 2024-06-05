const divParent = document.querySelector(".container");
const buttonOneEl = document.querySelector(".button_one");
const buttonTwoEl = document.querySelector(".button_two");

// console.log(buttonOneEl.className);

// buttonOneEl.addEventListener("click", () => {
// 	console.log("sono un button one");
// });

// buttonTwoEl.addEventListener("click", () => {
// 	console.log("sono un button two");
// });

divParent.addEventListener("click", (event) => {
	const eventTarget = event.target;
	console.dir(eventTarget);
	logUserName.call(eventTarget);

	if (eventTarget.tagName === "BUTTON" && eventTarget.className === "button_one") {
		console.log("sono un button one");
		return;
	}

	if (eventTarget.tagName === "BUTTON" && eventTarget.className === "button_two") {
		console.log("sono un button two");
		return;
	}

	if (eventTarget.tagName === "UL" && eventTarget.tagName === "LI") {
		console.log("sono nella lista");
		return;
	}

	console.log("sono soltanto il div da fuori");
});

//* SCOPE *//
const pippo = "pippo variable";
function pippoFunction() {
	console.log(pippo);
}

function plutoFunction() {
	const pluto = "pluto variable";
}
console.log("se facessi il console.log qui di pluto non funzionerebbe");

pippoFunction();

//**//

(() => {
	console.log("This function is called immediately");
})();

(function () {
	console.log("This function too is called immediately");
})();

//**//

const newObj = {
	name: "Pippo",
	age: "25",
	createUsername() {
		this.username = this.name + this.age;
	},
	test() {
		console.log(newObj.name, "Sono dentro l'oggetto, richiamo una proprietà dell'oggetto stesso");
		console.log(this.name, "Sono dentro l'oggetto, richiamo una proprietà del this");
		console.log(`Ciao sono ${this.name} e ho ${this.age} anni`);
	},
	// secondaFn: () => {
	// 	console.log("Sono la seconda funzione dentro l'oggetto");
	// },
};

newObj.test();
// newObj.secondaFn();
newObj.createUsername();
console.log(newObj);

//**//

console.clear();

const pippoUser = {
	name: "pippo",
	age: "25",
	getUserName: logUserName,
};

const plutoUser = {
	name: "pluto",
	age: "30",
	getUserName: logUserName,
};
pippoUser.getUserName();

function logUserName() {
	console.log(this.name);
	console.log(this);
	// guarda sopra all'add event listener
}
plutoUser.getUserName();

// oppure

function logName(obj) {
	console.log(obj.name);
}
logName(pippoUser);
logName(plutoUser);

// metodo per i contesti che permetti di passare come parametro il this che voglio
logUserName.call(pippoUser);
