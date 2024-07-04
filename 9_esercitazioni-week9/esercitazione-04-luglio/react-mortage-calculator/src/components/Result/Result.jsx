import styles from "./Result.module.css";
import Illustration from "/images/illustration-empty.svg";

function Result(props) {
	const { result } = props;

	return (
		<div className={styles.resultContainer}>
			{result ? (
				<>
					<h2>Your results</h2>
					<p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

					<div className={styles.resultBox}>
						<div className={styles.monthlyResult}>
							<p>Your monthly repayments</p>
							<h3>£{result.monthly}</h3>
						</div>

						<hr />

						<div className={styles.totalResult}>
							<p>Total you'll repay over the term</p>
							<h4>£{result.total}</h4>
						</div>
					</div>
				</>
			) : (
				<>
					<img src={Illustration} alt='Illustration' />
					<h2>Results shown here</h2>
					<p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
				</>
			)}
		</div>
	);
}

export { Result };
