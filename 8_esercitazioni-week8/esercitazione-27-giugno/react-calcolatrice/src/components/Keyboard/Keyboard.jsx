import { Button } from "../Button/Button";
import "./Keyboard.css";

function Keyboard(props) {
	const { displayContent, setDisplayContent } = props;

	const calcButtons = [
		{ label: "AC", className: "symbol" },
		{ label: "+/-", className: "symbol" },
		{ label: "%", className: "symbol" },
		{ label: "÷", className: "operator" },
		{ label: 7, className: "number" },
		{ label: 8, className: "number" },
		{ label: 9, className: "number" },
		{ label: "×", className: "operator" },
		{ label: 4, className: "number" },
		{ label: 5, className: "number" },
		{ label: 6, className: "number" },
		{ label: "−", className: "operator" },
		{ label: 1, className: "number" },
		{ label: 2, className: "number" },
		{ label: 3, className: "number" },
		{ label: "+", className: "operator" },
		{ label: "↺", className: "operator" },
		{ label: 0, className: "number" },
		{ label: ".", className: "number" },
		{ label: "=", className: "operator" },
	];

	function calculatorFunction(calcButton) {
		if (displayContent !== 0 && displayContent.toString().length < 30) {
			switch (calcButton.className) {
				case "number":
					handleNumber(displayContent, calcButton);
					break;

				case "symbol":
					handleSymbol(displayContent, calcButton);
					break;

				case "operator":
					handleOperator(displayContent, calcButton);
					break;

				default:
					break;
			}
		} else if (displayContent == 0) {
			switch (calcButton.className) {
				case "number":
					if (calcButton.label == ".") {
						setDisplayContent("0" + calcButton.label);
					} else {
						setDisplayContent(calcButton.label);
					}
					break;

				default:
					setDisplayContent("0" + calcButton.label);
					break;
			}
		} else {
			console.log({ displayContent });
			console.log(calcButton.label);
		}
	}

	function handleNumber(displayContent, calcButton) {
		setDisplayContent(displayContent.toString() + calcButton.label.toString());
	}

	function handleSymbol(displayContent, calcButton) {
		switch (calcButton.label) {
			case "AC":
				setDisplayContent(0);
				break;

			case "+/-":
				setDisplayContent(-displayContent);
				break;
		}
	}

	function handleOperator(displayContent, calcButton) {
		switch (calcButton.label) {
			case "↺":
				setDisplayContent(0);
				break;

			case "+":
				setDisplayContent(displayContent + "+");
				break;

			case "÷":
				setDisplayContent(displayContent + "÷");
				break;

			case "×":
				setDisplayContent(displayContent + "×");
				break;

			case "−":
				setDisplayContent(displayContent + "−");
				break;

			case "=":
				setDisplayContent(0);
				break;
		}
	}

	return (
		<>
			<div className='keyboard'>
				{calcButtons.map((calcButton) => (
					<Button key={calcButton.label} className={calcButton.className} label={calcButton.label} onClick={() => calculatorFunction(calcButton)} />
				))}
			</div>
		</>
	);
}

export { Keyboard };
