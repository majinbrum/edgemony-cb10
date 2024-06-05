// TODO 1: Trova il positivo:
// dato un array di numeri [-1, -2, -10, 2, 5];
// scriviamo due cicli for che soddisfano ognuno una condizione:
// --Stampare in console solo i numeri > 0
// --Deve interrompere al primo numero > 0 l'esecuzione del for (break)

const array = [-1, -2, -10, 2, 5];

// --Stampare in console solo i numeri > 0
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] <= 0) {
// 		continue;
// 	}
// 	console.log(array[i]); // 2 5
// }

// --Stampare in console solo i numeri > 0
for (let i = 0; i < array.length; i++) {
	array[i] > 0 ? console.log(array[i]) : null;
} // 2 5

// --Deve interrompere al primo numero > 0 l'esecuzione del for (break)
for (let i = 0; i < array.length; i++) {
	if (array[i] > 0) {
		console.log(array[i]);
		break;
	}
} // 2
