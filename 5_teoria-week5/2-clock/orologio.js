const div = document.querySelector(".counter");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

let number = 0;
p1.textContent = number;
const interval1 = setInterval(() => {
	number = ++number;
	p1.textContent = number;
	console.log(p1.textContent);
}, 1000);
p1.textContent = number;
div.appendChild(p1);

p2.textContent = new Date();
const interval2 = setInterval(() => {
	p2.textContent = new Date();
	console.log(p2.textContent);
}, 1000);
setTimeout(() => {
	p2.textContent = `Timeout ${new Date()}`;
	clearInterval(interval2);
}, 10000);
p2.textContent = new Date();
div.appendChild(p2);

console.log(div);
