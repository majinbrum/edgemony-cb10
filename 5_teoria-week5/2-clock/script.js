const div = document.querySelector(".counter");
const p = document.createElement("p");
const stopButton = document.createElement("button");
const startButton = document.createElement("button");
stopButton.className = "stop";
startButton.className = "start";
stopButton.textContent = "Stop";
startButton.textContent = "Start";

p.textContent = new Date();

div.append(startButton, stopButton);

const runInterval = () => {
	const id = setInterval(() => {
		p.textContent = new Date();
		console.log(p.textContent);
	}, 1000);
	return id;
};

let intervalId = runInterval();

startButton.addEventListener("click", () => {
	console.log("click start");
	clearInterval(intervalId);
	intervalId = runInterval();
});

stopButton.addEventListener("click", () => {
	console.log("click stop");
	clearInterval(intervalId);
});

div.append(p);
