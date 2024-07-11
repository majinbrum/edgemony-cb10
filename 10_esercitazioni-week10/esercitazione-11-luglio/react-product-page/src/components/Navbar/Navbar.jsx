import { useState } from "react";
import "./Navbar.module.css";

const navListItems = [
	{
		id: self.crypto.randomUUID(),
		label: "Collections",
		href: "#",
	},
	{
		id: self.crypto.randomUUID(),
		label: "Men",
		href: "#",
	},
	{
		id: self.crypto.randomUUID(),
		label: "Women",
		href: "#",
	},
	{
		id: self.crypto.randomUUID(),
		label: "About",
		href: "#",
	},
	{
		id: self.crypto.randomUUID(),
		label: "Contact",
		href: "#",
	},
];

function Navbar() {
	const [isDesktop, setIsDesktop] = useState(true);
	return (
		<>
			<nav>
				<div>
					{isDesktop ? null : <img src='../public/images/icon-menu.svg' alt='Menu icon' width='13' height='12' />}
					<img src='../public/images/logo.svg' alt='Menu icon' width='133' height='15' />

					{isDesktop ? (
						<ul>
							{navListItems.map((listItem) => {
								return (
									<li key={listItem.id}>
										<a href={listItem.href}>{listItem.label}</a>
									</li>
								);
							})}
						</ul>
					) : null}
				</div>
				<div>
					<img src='../public/images/icon-cart.svg' alt='Menu icon' width='18' height='16' />
					<img src='../public/images/image-avatar.png' alt='Menu icon' width='30' height='30' />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
