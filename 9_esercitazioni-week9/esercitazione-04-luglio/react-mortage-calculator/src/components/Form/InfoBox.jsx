import styles from "./Form.module.css";

function InfoBox(props) {
	const { name, label, symbol, type } = props;

	return (
		<div className={styles.infoBox}>
			<label className={styles.infoLabel} htmlFor={name}>
				{label}
			</label>
			<div className={styles.inputBox}>
				<span className={styles.symbolLabel}>{symbol}</span>
				<input className={styles.infoInput} type={type} name={name} />
			</div>
		</div>
	);
}

export { InfoBox };
