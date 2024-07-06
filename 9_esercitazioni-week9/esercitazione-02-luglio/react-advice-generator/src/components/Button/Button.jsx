import advices from "../../assets/data.json";
import "./Button.css";

function Button(props) {
	const { advice, setAdvice } = props;
	function randomizeAdvice() {
		const randomIndex = Math.floor(Math.random() * 10);
		if (advice !== advices[randomIndex]) {
			setAdvice(advices[randomIndex]);
		} else {
			randomizeAdvice();
		}
	}

	return (
		<>
			<button onClick={randomizeAdvice}>
				<img src='./public/images/icon-dice.svg' alt='Dice image' />
			</button>
		</>
	);
}

export { Button };
