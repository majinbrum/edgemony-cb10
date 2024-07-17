import { useState } from "react";

const navListItems = [
	{
		id: self.crypto.randomUUID(),
		label: "Home",
		path: "/",
	},
	// {
	// 	id: self.crypto.randomUUID(),
	// 	label: "Women",
	// 	path: "womens-shoes",
	// },
	// {
	// 	id: self.crypto.randomUUID(),
	// 	label: "Men",
	// 	path: "mens-shoes",
	// },
	{
		id: self.crypto.randomUUID(),
		label: "Cart",
		path: "cart",
	},
];

function Navbar() {
	const [isDesktop, setIsDesktop] = useState(true);
	return (
		<>
			<nav>
				<div>
					{isDesktop ? (
						<>
							<img src='/images/logo.svg' alt='Menu icon' width='133' height='15' />
							<ul>
								{navListItems.map((listItem) => {
									return (
										<li key={listItem.id}>
											<a href={listItem.path}>{listItem.label}</a>
										</li>
									);
								})}
							</ul>
						</>
					) : (
						<>
							<img src='/images/icon-menu.svg' alt='Menu icon' width='13' height='12' />
							<img src='/images/logo.svg' alt='Menu icon' width='133' height='15' />
						</>
					)}
				</div>
				<div>
					<img src='/images/icon-cart.svg' alt='Menu icon' width='18' height='16' />
					<img src='/images/image-avatar.png' alt='Menu icon' width='30' height='30' />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
