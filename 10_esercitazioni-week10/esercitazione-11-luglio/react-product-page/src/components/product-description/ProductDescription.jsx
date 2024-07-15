import styles from "./ProductDescription.module.css";

import Counter from "../counter/Counter.jsx";
import Button from "../button/Button.jsx";
import IconCart from "../icons/IconCart.jsx";

function ProductDescription() {
	return (
		<>
			<div className={styles.productDescription}>
				<h2>SNEAKER COMPANY</h2>
				<h1>Fall Limited Edition Sneakers</h1>
				<p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
				<div className={styles.priceTag}>
					<span className={styles.discountedPrice}>
						$125.00 <span className={styles.discountTag}>50%</span>
					</span>
					<span className={styles.originalPrice}>$250.00</span>
				</div>
				<div className={styles.btnDiv}>
					<Counter />
					<Button text={"Add to cart"}>
						<IconCart fill={"var(--black)"} />
					</Button>
				</div>
			</div>
		</>
	);
}

export default ProductDescription;
