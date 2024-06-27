function ButtonsList(props) {
	const { count, setCount } = props;
	const buttonsList = ["-", "Reset", "+"];

	function handleCount(button) {
		console.log(button);
		switch (button) {
			case "-":
				setCount(count - 1);
				break;

			case "+":
				setCount(count + 1);
				break;

			default:
				setCount(0);
				break;
		}
	}

	return (
		<>
			{buttonsList.map((button) => (
				<Button key={button} label={button} onClick={() => handleCount(button)} />
			))}
		</>
	);
}

function Button(props) {
	const { label, onClick } = props;
	return <button onClick={onClick}>{label}</button>;
}

export { ButtonsList };
