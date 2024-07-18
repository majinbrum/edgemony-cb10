import { useState, useEffect } from "react";
import styles from "./Cart.module.css";

function Cart() {
	const [isLoading, setIsLoading] = useState(true);
	const [cart, setCart] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		setCart(JSON.parse(localStorage.getItem("cart")) || []);
		setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	if (isLoading) return <p>isLoading...</p>;

	return (
		<>
			<main className={styles.cart}>
				<ul>
					{cart.map((cartItem) => {
						return (
							<li key={cartItem.item.id}>
								<div className={styles.card}>
									<div className={styles.cardImg}>
										<img src={cartItem.item.images[0]} alt='Product image' width='200' height='200' />
									</div>
									<div className={styles.cardContent}>
										<h2>{cartItem.item.title}</h2>
										<h4>Quantity: {cartItem.quantity}</h4>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</main>
		</>
	);
}

export default Cart;
