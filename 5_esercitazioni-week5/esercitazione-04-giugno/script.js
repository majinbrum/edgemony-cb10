const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const runClock = () => {
	setInterval(() => {
		const date = new Date();

		const formattedTime = new Intl.DateTimeFormat("it-IT", {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		}).format(date);
		timeEl.textContent = formattedTime;

		const formattedDate = new Intl.DateTimeFormat("it-IT", {
			weekday: "short",
			day: "numeric",
			month: "long",
		}).format(date)
			.split(" ")
			.map((el) => `${el[0].toUpperCase()}${el.slice(1)}`)
			.join(" ");
		dateEl.textContent = formattedDate;

		console.log(date);
	}, 1000);
};
runClock();