const loggerFn = (arg) => {
	console.log("loggerFn", arg);
};

loggerFn("primo log");
loggerFn("secondo log");
loggerFn("terzo log");

let number = 0;
loggerFn(number);

// setInterval accetta una callback come primo parametro, e come secondo parametro i millisecondi. ogni tot millisecondi esegui la callback
const intervalID = setInterval(() => {
	number = ++number;
	loggerFn(`dentro interval ${number}`);
}, 5000);

loggerFn("quarto log");
loggerFn(`log di const interval ${intervalID}`);

setTimeout(() => {
	clearInterval(intervalID);
	loggerFn("ho stoppato l'interval");
}, 10000);
