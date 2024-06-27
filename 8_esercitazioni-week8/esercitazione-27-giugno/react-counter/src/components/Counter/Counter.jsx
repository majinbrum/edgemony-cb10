import { Button } from "../Button/Button";
import "./Counter.css";

function Counter(props) {
	const { count, setCount } = props;
	const buttonsList = [
		{ label: "-", className: "minus" },
		{ label: "Reset", className: "reset" },
		{ label: "+", className: "plus" },
	];

	function handleCount(button) {
		switch (button.className) {
			case "minus":
				setCount(count - 1);
				break;

			case "reset":
				setCount(0);
				break;

			case "plus":
				setCount(count + 1);
				break;
		}
	}

	return (
		<>
			<div className='counter'>
				{buttonsList.map((button) => (
					<Button key={button.className} className={"btn " + button.className} label={button.label} onClick={() => handleCount(button)} />
				))}
			</div>
		</>
	);
}

export { Counter };
