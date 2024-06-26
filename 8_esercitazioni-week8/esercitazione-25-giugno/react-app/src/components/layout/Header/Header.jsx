import "./Header.css";

function Header() {
	return (
		<header>
			<img src='https://picsum.photos/50' alt='Logo' />
			<Nav />
		</header>
	);
}

function Nav() {
	const navItems = [{ label: "Articoli" }, { label: "Autori" }, { label: "Chi siamo" }];

	return (
		<nav>
			<ul>
				{navItems.map((item, index) => (
					<NavItem key={`${item.label}+${index}`} label={item.label} href={item.href} />
				))}
			</ul>
		</nav>
	);
}

function NavItem(props) {
	const { label, href = "#" } = props;
	return (
		<li>
			<a href={href}>{label}</a>
		</li>
	);
}

export { Header };
