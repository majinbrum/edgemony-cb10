import { useState, useEffect } from "react";
import Catalog from "./components/Catalog/Catalog.jsx";
import styles from "./App.module.css";

function App() {
	const [shoesM, setShoesM] = useState([]);
	const [shoesF, setShoesF] = useState([]);

	const getShoesM = () => {
		try {
			fetch("https://dummyjson.com/products/category/mens-shoes")
				.then((res) => res.json())
				.then((res) => {
					setShoesM(res.products);
				});
		} catch (error) {
			console.error(error);
		}
	};

	const getShoesF = () => {
		try {
			fetch("https://dummyjson.com/products/category/womens-shoes")
				.then((res) => res.json())
				.then((res) => {
					setShoesF(res.products);
					console.log(res);
				});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getShoesM();
		getShoesF();
	}, []);

	return (
		<>
			<main className={styles.home}>
				<header>
					<h1>
						Welcome to <em>SoleMates</em>: <br />
						<mark>Your Ultimate Destination for Stylish Shoes!</mark>
					</h1>
					<h3>
						Step into the world of fashion with our exclusive collection of shoes. Whether you're looking for the latest trends or timeless classics, we have the perfect pair for every occasion.
						Explore our wide range of high-quality footwear and find your perfect match today!
					</h3>
				</header>

				<hr />

				<div className={styles.catalogContainer}>
					<h2>Men's Shoes ({shoesM.length})</h2>
					<Catalog list={shoesM} />
				</div>

				<hr />

				<div className={styles.catalogContainer}>
					<h2>Women's Shoes ({shoesF.length})</h2>
					<Catalog list={shoesF} />
				</div>
			</main>
		</>
	);
}

export default App;
