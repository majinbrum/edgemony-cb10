import styles from "../App.module.css";

function Button({ children, text = "Add to cart" }) {
	return (
		<button className={styles.button}>
			{children}
			{text}
		</button>
	);
}

export default Button;
