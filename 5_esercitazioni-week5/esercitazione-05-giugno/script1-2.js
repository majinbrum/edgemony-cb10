//******************************ESERCIZIO 1******************************//

//TODO 1: manipoliamo il dom e sfruttiamo l'event bubbling la propagazione degli eventi:
// create un elemento parent tipo div che ingloba 2 bottoni o anche 3, ascoltiamo l'evento dall'elemento parent e diamo dei comportamenti diversi per ogni bottone che verrà cliccato (va bene anche un console log)

const parentDiv = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

btn1.textContent = "Button1";
btn2.textContent = "Button2";
btn3.textContent = "Button3";

document.body.insertAdjacentElement("afterbegin", parentDiv);
parentDiv.append(btn1, btn2, btn3);

console.dir(parentDiv);
console.log(parentDiv.childNodes);

// parentDiv.addEventListener("click", (event) => {
// 	const btnChild = parentDiv.childNodes;
// 	if (event.target === btnChild[0]) {
// 		console.log("sono il btn 1");
// 		return;
// 	}

// 	if (event.target === btnChild[1]) {
// 		console.log("sono il btn 2");
// 		return;
// 	}

// 	if (event.target === btnChild[2]) {
// 		console.log("sono il btn 3");
// 		return;
// 	}

// 	console.log("sono il div");
// });

//**OPPURE**//

parentDiv.addEventListener("click", function (event) {
	const btnChild = parentDiv.childNodes;

	switch (event.target) {
		case btnChild[0]:
			console.log("sono il btn 1");
			consoleThis.call(event.target);
			break;

		case btnChild[1]:
			console.log("sono il btn 2");
			break;

		case btnChild[2]:
			console.log("sono il btn 3");
			break;

		default:
			console.log("sono il div");
			break;
	}
});

//******************************ESERCIZIO 2******************************//

// TODO 2: provate a creare una funzione globale che logga il this, chiamare questa funzione al click e provate a leggere il contesto di event.target

function consoleThis() {
	console.log(this);
}
