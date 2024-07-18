import Counter from "../../components/Counter/Counter.jsx";
import Button from "../../components/Button/Button.jsx";
import IconCart from "../../components/icons/IconCart.jsx";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

function calculateOriginalPrice(product) {
	const discountedPrice = product.price;
	const discountPercentage = product.discountPercentage;
	const originalPrice = discountedPrice / (1 - discountPercentage / 100);
	return originalPrice.toFixed(2);
}

function ProductPage() {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const [product, setProduct] = useState(null);
	const [selectedImg, setSelectedImg] = useState("");

	const [counter, setCounter] = useState(0);
	const [cart, setCart] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then((res) => {
				res.originalPrice = Number(calculateOriginalPrice(res));
				setProduct(res);
				setSelectedImg(res.images[0]);
				console.log(res);
			})
			.catch((err) => {
				console.error(err);
				setHasError(true);
			})
			.finally(() => setIsLoading(false));

		setCart(JSON.parse(localStorage.getItem("cart")) || []);
	}, []);

	function addToCart() {
		if (counter !== 0) {
			const isInArray = cart.some((item) => item.item.id === product.id);
			if (isInArray) {
				const newCart = cart.map((item) => (item.item.id === product.id ? { ...item, quantity: item.quantity + counter } : item));
				setCart(newCart);

				// console.log("si", cart);
			} else {
				setCart((prevCart) => [...prevCart, { item: product, quantity: counter }]);

				// console.log("no", cart);
			}
			localStorage.setItem("cart", JSON.stringify(cart));
			console.log(cart);
		}
	}

	if (isLoading) return <p>isLoading...</p>;
	if (hasError) return <p>C'è un prob</p>;

	return (
		<>
			<main className={styles.product}>
				<div className={styles["product-lightbox"]}>
					<div className={styles.showBox}>
						<img src={selectedImg} alt='Product image' loading='lazy' />
					</div>
					<ul className={styles["thumbnail-list"]}>
						{product.images.map((img, index) => {
							return (
								<li key={index} onClick={() => setSelectedImg(img)}>
									<div className={styles.thumbNail}>
										<img className={img === selectedImg ? styles.selected : undefined} src={img} alt='Product image thumbnail' loading='lazy' />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles.productDescription}>
					<h2>{product.brand}</h2>
					<h1>{product.title}</h1>
					<p>{product.description}</p>
					<div className={styles.priceTag}>
						<span className={styles.discountedPrice}>
							{product.price}$ <span className={styles.discountTag}>{Math.round(product.discountPercentage)}%</span>
						</span>
						<span className={styles.originalPrice}>{product.originalPrice}$</span>
					</div>
					<div className={styles.btnDiv}>
						<Counter counter={counter} setCounter={setCounter} />
						<Button text={"Add to cart"} onClick={addToCart}>
							<IconCart fill={"var(--black)"} />
						</Button>
					</div>
				</div>
			</main>
		</>
	);
}

export default ProductPage;
