import advices from "../../assets/data.json";
import "./Button.css";

function Button(props) {
	const { setAdvice } = props;
	const randomizeAdvice = () => {
		const randomIndex = Math.floor(Math.random() * 10);
		console.log(randomIndex);
		setAdvice(advices[randomIndex]);
	};

	return (
		<>
			<button onClick={randomizeAdvice}>
				<img src='./public/images/icon-dice.svg' alt='Dice image' />
			</button>
		</>
	);
}

export { Button };
