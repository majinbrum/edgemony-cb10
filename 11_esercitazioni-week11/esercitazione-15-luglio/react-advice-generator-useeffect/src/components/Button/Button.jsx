import "./Button.css";

function Button(props) {
	const { onClick } = props;

	return (
		<>
			<button onClick={onClick}>
				<img src='./public/images/icon-dice.svg' alt='Dice image' />
			</button>
		</>
	);
}

export { Button };
