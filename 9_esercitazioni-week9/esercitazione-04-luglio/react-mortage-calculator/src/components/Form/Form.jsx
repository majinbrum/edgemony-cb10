import { InfoBox } from "./InfoBox.jsx";
import { TypeBox } from "./TypeBox.jsx";
import { calculateRepayments } from "./calculateRepayments.js";
import { calculateInterest } from "./calculateInterest.js";
import styles from "./Form.module.css";
import CalcIcon from "../../../public/images/icon-calculator.svg";

function Form(props) {
	const { result, setResult } = props;

	function calculateResult(e) {
		e.preventDefault();
	}

	return (
		<form className={styles.formContainer}>
			<header>
				<h1>Mortage Calculator</h1>
				<button>Clear All</button>
			</header>

			<InfoBox name='amount' label='Mortage Amount' symbol='£' type='number' />

			<div className={styles.optionsBox}>
				<InfoBox name='term' label='Mortage Term' symbol='years' type='number' />

				<InfoBox name='interest' label='Interest Rate' symbol='%' type='number' />
			</div>

			<div className={styles.mortageTypeBox}>
				<legend htmlFor='mortageType'>Mortage Type</legend>

				<TypeBox id='repayment' label='Repayment' />

				<TypeBox id='interestOnly' label='Interest Only' />
			</div>

			<button className={styles.calculateBtn} type='submit' onClick={(e) => calculateResult(e)}>
				<img src={CalcIcon} alt='Calculator icon' />
				Calculate Repayments
			</button>
		</form>
	);
}

export { Form };
