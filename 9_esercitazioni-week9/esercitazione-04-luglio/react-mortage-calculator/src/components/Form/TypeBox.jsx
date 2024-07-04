import styles from "./Form.module.css";

function TypeBox(props) {
	const { id, label } = props;

	return (
		<div className={styles.typeBox}>
			<input className={styles.radioInput} name='mortageType' type='radio' id={id} />
			<label className={styles.infoLabel} htmlFor={id}>
				{label}
			</label>
		</div>
	);
}

export { TypeBox };
