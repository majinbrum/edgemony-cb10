import styles from "./Form.module.css";

function InfoBox(props) {
	const { name, label, symbol, type, setDataInput } = props;

	function setData(e) {
		const key = e.target.name;
		const value = e.target.value;
		setDataInput((prevState) => ({ ...prevState, [key]: value }));
	}

	return (
		<div className={styles.infoBox}>
			<label className={styles.infoLabel} htmlFor={name}>
				{label}
			</label>
			<div className={styles.inputBox}>
				<span className={styles.symbolLabel}>{symbol}</span>
				<input className={styles.infoInput} type={type} name={name} onChange={(e) => setData(e)} />
			</div>
		</div>
	);
}

export { InfoBox };
