import IconPlus from "../icons/IconPlus.jsx";
import IconMinus from "../icons/IconMinus.jsx";
import styles from "./Counter.module.css";
import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState(0);
	const handleCounter = (e) => {
		const id = e.currentTarget.id;
		setCounter(id === "minus" ? counter - 1 : counter + 1);
	};

	return (
		<>
			<div className={styles.counter}>
				<button id='minus' onClick={handleCounter} disabled={counter < 1}>
					<IconMinus />
				</button>
				<span>{counter}</span>
				<button id='plus' onClick={handleCounter}>
					<IconPlus />
				</button>
			</div>
		</>
	);
}

export default Counter;
