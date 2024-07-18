import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

// const navListItems = [
// 	{
// 		id: self.crypto.randomUUID(),
// 		label: "Home",
// 		path: "/",
// 	},
// 	{
// 		id: self.crypto.randomUUID(),
// 		label: "Women",
// 		path: "womens-shoes",
// 	},
// 	{
// 		id: self.crypto.randomUUID(),
// 		label: "Men",
// 		path: "mens-shoes",
// 	},
// ];

import { useState, useEffect } from "react";

function Navbar() {
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
	const [cartAmount, setCartAmount] = useState(0);

	useEffect(() => {
		setCartAmount(cart.length);
	}, [cart]);

	return (
		<>
			<nav>
				<div>
					{/* <img src='/images/icon-menu.svg' alt='Menu icon' width='13' height='12' /> */}
					<NavLink to='/'>
						<img src='/images/logo.svg' alt='Menu icon' width='133' height='15' />
					</NavLink>
				</div>
				<div>
					<NavLink to='cart' className={styles.cartIcon}>
						<img src='/images/icon-cart.svg' alt='Menu icon' width='18' height='16' />
						{cartAmount > 0 && <span className={styles.cartAmount}>{cartAmount}</span>}
					</NavLink>
					<img src='/images/image-avatar.png' alt='Menu icon' width='30' height='30' />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
