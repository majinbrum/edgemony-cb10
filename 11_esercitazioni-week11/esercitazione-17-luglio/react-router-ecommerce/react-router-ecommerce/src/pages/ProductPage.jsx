import IconPlus from "../components/icons/IconPlus.jsx";
import IconMinus from "../components/icons/IconMinus.jsx";
import Button from "../components/Button.jsx";
import IconCart from "../components/icons/IconCart.jsx";

import { useState } from "react";
import styles from "../App.module.css";

const products = [
	{
		id: self.crypto.randomUUID(),
		product: "/images/image-product-1.jpg",
		thumbNail: "/images/image-product-1-thumbnail.jpg",
	},
	{
		id: self.crypto.randomUUID(),
		product: "/images/image-product-2.jpg",
		thumbNail: "/images/image-product-2-thumbnail.jpg",
	},
	{
		id: self.crypto.randomUUID(),
		product: "/images/image-product-3.jpg",
		thumbNail: "/images/image-product-3-thumbnail.jpg",
	},
	{
		id: self.crypto.randomUUID(),
		product: "/images/image-product-4.jpg",
		thumbNail: "/images/image-product-4-thumbnail.jpg",
	},
];

function ProductPage() {
	const [selectedImg, setSelectedImg] = useState(products[0]);

	const handleClick = (id) => {
		const product = products.find((product) => product.id === id);
		setSelectedImg(product);
	};

	const [counter, setCounter] = useState(0);
	const handleCounter = (e) => {
		const id = e.currentTarget.id;
		setCounter(id === "minus" ? counter - 1 : counter + 1);
	};

	return (
		<>
			<div className={styles["product-lightbox"]}>
				<div className={styles.showBox}>
					<img src={selectedImg.product} alt='Product image' />
				</div>
				<ul className={styles["thumbnail-list"]}>
					{products.map((product) => {
						return (
							<li key={product.id} onClick={() => handleClick(product.id)}>
								<div className={styles.thumbNail}>
									<img className={product.id === selectedImg.id ? styles.selected : undefined} src={product.thumbNail} alt='Product image thumbnail' />
								</div>
							</li>
						);
					})}
				</ul>
			</div>
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
					<div className={styles.counter}>
						<button id='minus' onClick={handleCounter} disabled={counter < 1}>
							<IconMinus />
						</button>
						<span>{counter}</span>
						<button id='plus' onClick={handleCounter}>
							<IconPlus />
						</button>
					</div>
					<Button text={"Add to cart"}>
						<IconCart fill={"var(--black)"} />
					</Button>
				</div>
			</div>
		</>
	);
}

export default ProductPage;
