import IconPlus from "../icons/IconPlus.jsx";
import IconMinus from "../icons/IconMinus.jsx";
import styles from "./Counter.module.css";

function Counter() {
	return (
		<>
			<div className={styles.counter}>
				<button>
					<IconMinus />
				</button>
				<span>0</span>
				<button>
					<IconPlus />
				</button>
			</div>
		</>
	);
}

export default Counter;
