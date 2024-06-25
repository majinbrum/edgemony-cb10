function Footer() {
	return (
		<footer>
			<img src='https://picsum.photos/50' alt='Logo' width='50' height='50' />
			<Nav />
		</footer>
	);
}

function Nav() {
	return (
		<nav>
			<ul>
				<NavItem />
				<NavItem />
				<NavItem />
			</ul>
		</nav>
	);
}

function NavItem() {
	return (
		<li>
			<a href='#'>Prodotti</a>
		</li>
	);
}

export { Footer };
