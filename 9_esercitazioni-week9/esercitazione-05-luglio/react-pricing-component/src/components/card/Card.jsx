import styles from "./Card.module.css";
import iconCheck from "/public/images/icon-check.svg";

function Card() {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardTop}>
				<h2>100K PAGEVIEWS</h2>
				<div className={styles.slideContainer}>
					<input type='range' min='1' max='100' defaultValue='50' className={styles.slider} id='myRange' />
				</div>
				<div className={styles.priceTag}>
					<span>$16.00</span>
					<span> / month</span>
				</div>
				<div className={styles.options}>
					<label htmlFor='monthlyBilling'>Monthly Billing</label>
					<label className={styles.switch}>
						<input type='checkbox' />
						<span className={`${styles.slider} ${styles.round}`}></span>
					</label>
					<label htmlFor='yearlyBilling'>Yearly Billing</label>
				</div>
			</div>
			<hr />
			<div className={styles.cardBottom}>
				<ul>
					<li>
						<img src={iconCheck} alt='Icon check' width='15' height='15' />
						Unlimited websites
					</li>
					<li>
						<img src={iconCheck} alt='Icon check' width='15' height='15' />
						100% data ownership
					</li>
					<li>
						<img src={iconCheck} alt='Icon check' width='15' height='15' />
						Email reports
					</li>
				</ul>
				<button className={styles.btnCta}>Start my trial</button>
			</div>
		</div>
	);
}

export default Card;
