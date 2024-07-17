import IconPlus from "../components/icons/IconPlus.jsx";
import IconMinus from "../components/icons/IconMinus.jsx";
import Button from "../components/Button.jsx";
import IconCart from "../components/icons/IconCart.jsx";

import { useState, useEffect } from "react";
import styles from "../App.module.css";

function ProductPage() {
	const [currentProduct, setCurrentProduct] = useState(null);
	const [selectedImg, setSelectedImg] = useState("ciao");
	const [originalPrice, setOriginalPrice] = useState(0);

	const handleClick = (img) => {
		const productImages = currentProduct.images.find((otherImg) => img === otherImg);
		setSelectedImg(img);
	};

	const [counter, setCounter] = useState(0);
	const handleCounter = (e) => {
		const id = e.currentTarget.id;
		setCounter(id === "minus" ? counter - 1 : counter + 1);
	};

	function calculateOriginalPrice(currentProduct) {
		const discountedPrice = currentProduct.price;
		const discountPercentage = currentProduct.discountPercentage;
		const originalPrice = discountedPrice / (1 - discountPercentage / 100);
		setOriginalPrice(originalPrice.toFixed(2));
	}

	useEffect(() => {
		setCurrentProduct(JSON.parse(localStorage.getItem("selectedProduct")));
	}, []);

	useEffect(() => {
		console.log(currentProduct);
		if (currentProduct) {
			setSelectedImg(currentProduct.images[0]);
			calculateOriginalPrice(currentProduct);
		}
	}, [currentProduct]);

	return (
		<>
			{currentProduct && (
				<main className={styles.product}>
					<div className={styles["product-lightbox"]}>
						<div className={styles.showBox}>
							<img src={selectedImg} alt='Product image' loading='lazy' />
						</div>
						<ul className={styles["thumbnail-list"]}>
							{currentProduct.images.map((img, index) => {
								return (
									<li key={index} onClick={() => handleClick(img)}>
										<div className={styles.thumbNail}>
											<img className={img === selectedImg ? styles.selected : undefined} src={img} alt='Product image thumbnail' loading='lazy' />
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.productDescription}>
						<h2>{currentProduct.brand}</h2>
						<h1>{currentProduct.title}</h1>
						<p>{currentProduct.description}</p>
						<div className={styles.priceTag}>
							<span className={styles.discountedPrice}>
								{currentProduct.price}$ <span className={styles.discountTag}>{Math.round(currentProduct.discountPercentage)}%</span>
							</span>
							<span className={styles.originalPrice}>{originalPrice}$</span>
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
				</main>
			)}
		</>
	);
}

export default ProductPage;
