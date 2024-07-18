import { useEffect, useState } from "react";
import styles from "./Catalog.module.css";

function Catalog({ list }) {
	const [selectedProduct, setSelectedProduct] = useState(null);

	const saveSelectedProduct = () => {
		localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
	};

	useEffect(() => {
		saveSelectedProduct(selectedProduct);
	}, [selectedProduct]);

	return (
		<ul className={styles.catalog}>
			{list.map((item) => (
				<li key={item.id}>
					<div className={styles["catalog-product"]}>
						<div className={styles.productThumbnail}>
							<img src={item.thumbnail} alt='Product thumbnail' width='300' heigth='300' loading='lazy' />
						</div>
						<h4 className={styles.productBrand}>{item.brand}</h4>
						<h3 className={styles.productTitle}>{item.title}</h3>
						<div className={styles.tags}>
							{item.tags.map((tag, index) => (
								<h5 key={index}>{tag}</h5>
							))}
						</div>
						<div className={styles.add}>
							<div className={styles.price}>
								<h4 className={styles.discountedPrice}>{item.price}$</h4>
								<h4 className={styles.discountTag}>{item.discountPercentage}%</h4>
							</div>
							<a href={`product`} onClick={() => setSelectedProduct(item)}>
								Details
							</a>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}

export default Catalog;
