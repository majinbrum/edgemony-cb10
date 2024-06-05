// TODO 3: Conta il click
// scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.

let count = 0;
const countClick = () => {
	count++;

	const counter = document.querySelector(".counter");
	counter.innerText = count;

	if (count > 20) {
		count = 0;
		alert("Ok, you win! Enough counting!!");
		counter.innerText = 0;
	}
	console.log(count);
};

document.body.onclick = countClick;

// output:
// click -> 1
// click -> 2
// click -> 3
