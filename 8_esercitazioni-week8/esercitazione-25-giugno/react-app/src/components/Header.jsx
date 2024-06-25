function Header() {
	return (
		<header>
			<img src='https://picsum.photos/50' alt='Logo' />
			<Nav />
		</header>
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

export { Header };
