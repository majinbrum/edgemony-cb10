import styles from "./ShowBox.module.css";

function ShowBox({ imgUrl }) {
	return (
		<>
			<div className={styles.showBox}>
				<img src={imgUrl} alt='Product image' />
			</div>
		</>
	);
}

export default ShowBox;
