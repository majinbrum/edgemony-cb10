function Keyboard(props) {
	const { displayContent, setDisplayContent } = props;

	const calcLabels = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];

	function handleDisplayContent(calcLabel) {
		if (displayContent !== 0) {
			const updatedContent = displayContent.toString() + calcLabel.toString();
			console.log({ calcLabel });
			console.log({ updatedContent });
			setDisplayContent(updatedContent);
		} else {
			setDisplayContent(calcLabel);
		}
	}

	return (
		<>
			{calcLabels.map((calcLabel) => (
				<Button key={calcLabel} label={calcLabel} onClick={() => handleDisplayContent(calcLabel)} />
			))}
		</>
	);
}

function Button(props) {
	const { label, onClick } = props;
	return <button onClick={onClick}>{label}</button>;
}

export { Keyboard };
