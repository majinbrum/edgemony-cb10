//TODO 1: manipoliamo il dom e sfruttiamo l'event bubbling la propagazione degli eventi:
// create un elemento parent tipo div che ingloba 2 bottoni o anche 3, ascoltiamo l'evento dall'elemento parent e diamo dei comportamenti diversi per ogni bottone che verrà cliccato (va bene anche un console log)
const containerDiv = document.querySelector(".container");
const parentDiv = document.createElement("div");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
containerDiv.append(parentDiv);
parentDiv.append(btn1, btn2, btn3);
