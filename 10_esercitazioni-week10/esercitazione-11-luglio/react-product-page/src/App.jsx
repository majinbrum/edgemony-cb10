import { useState } from "react";
import styles from "./App.module.css";

import Navbar from "./components/navbar/Navbar.jsx";
import ProductLightBox from "./components/product-lightbox/ProductLightBox.jsx";
import ProductDescription from "./components/product-description/ProductDescription.jsx";

function App() {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				<main>
					<ProductLightBox />
					<ProductDescription />
				</main>
			</div>
			<div className={styles.attribution}>
				Challenge by{" "}
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
					Frontend Mentor
				</a>
				. Coded by <a href='#'>Bruna Alamia</a>.
			</div>
		</>
	);
}

export default App;
