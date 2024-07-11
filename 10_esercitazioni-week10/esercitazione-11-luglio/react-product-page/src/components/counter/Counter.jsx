import IconPlus from "../icons/IconPlus.jsx";
import IconMinus from "../icons/IconMinus.jsx";
import styles from "./Counter.module.css";
import classNames from "classnames";

function Counter() {
	return (
		<>
			<div className={styles.counter}>
				<button>
					<IconMinus />
				</button>
				<div>0</div>
				<button>
					<IconPlus />
				</button>
			</div>
		</>
	);
}

export default Counter;
