import styles from "./Button.module.css";

function Button({ children, text = "Add to cart", onClick }) {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
			{text}
		</button>
	);
}

export default Button;
