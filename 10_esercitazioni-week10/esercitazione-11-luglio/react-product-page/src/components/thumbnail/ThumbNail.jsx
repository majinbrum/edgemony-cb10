import styles from "./ThumbNail.module.css";

function ThumbNail({ isSelected = false, thumbNail = "" }) {
	return (
		<div className={styles.thumbNail}>
			<img className={isSelected ? styles.selected : undefined} src={thumbNail} alt='Product image thumbnail' />
		</div>
	);
}

export default ThumbNail;
