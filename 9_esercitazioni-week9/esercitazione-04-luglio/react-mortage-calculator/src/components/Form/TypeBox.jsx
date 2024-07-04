import styles from "./Form.module.css";

function TypeBox(props) {
	const { id, label, setDataInput } = props;

	function setData(e) {
		const key = e.target.name;
		const value = e.target.value;
		setDataInput((prevState) => ({ ...prevState, [key]: value }));
	}

	return (
		<div className={styles.typeBox}>
			<input className={styles.radioInput} name='mortageType' type='radio' id={id} value={id} onChange={(e) => setData(e)} />
			<label className={styles.infoLabel} htmlFor={id}>
				{label}
			</label>
		</div>
	);
}

export { TypeBox };
