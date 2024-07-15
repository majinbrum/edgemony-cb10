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
	const [isDesktop, setIsDesktop] = useState(false);
	return (
		<>
			<nav>
				<div>
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
					) : (
						<img src='/images/icon-menu.svg' alt='Menu icon' width='13' height='12' />
					)}
					<img src='/images/logo.svg' alt='Menu icon' width='133' height='15' />
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
