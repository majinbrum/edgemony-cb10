import "./Navbar.css";

function Navbar() {
	return (
		<>
			<nav>
				<div>
					<img src='../public/images/icon-menu.svg' alt='Menu icon' width='16' height='15' />
					<img src='../public/images/logo.svg' alt='Menu icon' width='138' height='20' />
				</div>
				<div>
					<img src='../public/images/icon-cart.svg' alt='Menu icon' width='22' height='20' />
					<img src='../public/images/image-avatar.png' alt='Menu icon' width='100' height='100' />
				</div>
			</nav>
		</>
	);
}

export { Navbar };
