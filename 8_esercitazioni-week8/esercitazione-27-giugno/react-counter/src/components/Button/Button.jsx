import "./Button.css";

function Button(props) {
	const { label, className, onClick } = props;
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
}

export { Button };
