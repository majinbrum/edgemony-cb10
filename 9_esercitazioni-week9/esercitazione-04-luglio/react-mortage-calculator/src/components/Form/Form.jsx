import { InfoBox } from "./InfoBox.jsx";
import { TypeBox } from "./TypeBox.jsx";
import { calculateRepayments } from "./calculateRepayments.js";
import { calculateInterests } from "./calculateInterests.js";
import styles from "./Form.module.css";
import CalcIcon from "/images/icon-calculator.svg";

function Form(props) {
	const { dataInput, setDataInput, setResult } = props;

	/**
	 * Calcola i risultati
	 * @param {number} amount
	 * @param {number} term
	 * @param {number} rate
	 * @returns monthly: value, total: value
	 */
	function calculateResult(e) {
		e.preventDefault();

		const mortageTypeSelected = dataInput.mortageType;

		setResult(mortageTypeSelected === "repayment" ? calculateRepayments(dataInput.amount, dataInput.term, dataInput.rate) : calculateInterests(dataInput.amount, dataInput.term, dataInput.rate));
	}

	return (
		<form className={styles.formContainer}>
			<header>
				<h1>Mortage Calculator</h1>
				<button>Clear All</button>
			</header>

			<InfoBox name='amount' label='Mortage Amount' symbol='£' type='number' setDataInput={setDataInput} />

			<div className={styles.optionsBox}>
				<InfoBox name='term' label='Mortage Term' symbol='years' type='number' setDataInput={setDataInput} />

				<InfoBox name='rate' label='Interest Rate' symbol='%' type='number' setDataInput={setDataInput} />
			</div>

			<div className={styles.mortageTypeBox}>
				<legend htmlFor='mortageType'>Mortage Type</legend>

				<TypeBox id='repayment' label='Repayment' setDataInput={setDataInput} />

				<TypeBox id='interest' label='Interest Only' setDataInput={setDataInput} />
			</div>

			<button className={styles.calculateBtn} type='submit' onClick={(e) => calculateResult(e)}>
				<img src={CalcIcon} alt='Calculator icon' />
				Calculate Repayments
			</button>
		</form>
	);
}

export { Form };
