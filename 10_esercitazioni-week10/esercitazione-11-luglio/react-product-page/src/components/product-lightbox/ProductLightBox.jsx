import { useState } from "react";
import ShowBox from "../showbox/ShowBox.jsx";
import ThumbNail from "../thumbnail/ThumbNail.jsx";
import styles from "./ProductLightBox.module.css";

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
function ProductLightBox() {
	const [selectedImg, setSelectedImg] = useState(products[0]);

	const handleClick = (id) => {
		const product = products.find((product) => product.id === id);
		setSelectedImg(product);
	};

	return (
		<>
			<div className={styles["product-lightbox"]}>
				<ShowBox imgUrl={selectedImg.product} />
				<ul className={styles["thumbnail-list"]}>
					{products.map((product) => {
						return (
							<li key={product.id} onClick={() => handleClick(product.id)}>
								<ThumbNail isSelected={product.id === selectedImg.id} thumbNail={product.thumbNail} />
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default ProductLightBox;
