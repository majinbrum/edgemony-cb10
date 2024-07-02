import "./Counter.css";
import "./Button.css";

function Counter(props) {
	const { count, setCount } = props;

	function handleCount(e) {
		switch (e.target.classList[1]) {
			case "minus":
				setCount(count - 1);
				console.log(count);
				break;

			case "reset":
				setCount(0);
				console.log(count);
				break;

			case "plus":
				setCount(count + 1);
				console.log(count);
				break;
		}
	}

	return (
		<>
			<div className='counter'>
				<button className={"btn " + "minus"} disabled={count === 0} onClick={(e) => handleCount(e)}>
					-
				</button>
				<button className={"btn " + "reset"} disabled={count === 0} onClick={(e) => handleCount(e)}>
					Reset
				</button>
				<button className={"btn " + "plus"} disabled={count === 10} onClick={(e) => handleCount(e)}>
					+
				</button>
			</div>
		</>
	);
}

export { Counter };
