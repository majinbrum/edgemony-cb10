import "./Footer.css";

function Footer() {
	return (
		<footer>
			<img src='https://picsum.photos/50' alt='Logo' width='50' height='50' />
			<Nav />
		</footer>
	);
}

function Nav() {
	const navMenuItems = [
		{
			label: "Articoli",
			children: [
				{ label: "Categoria articoli 1", href: "https://google.it" },
				{ label: "Categoria articoli 2", href: "https://edgemony.com/" },
				{ label: "Categoria articoli 3", href: "https://projectlearn.io/" },
			],
		},
		{ label: "Autori" },
		{ label: "Chi siamo" },
	];

	return (
		<nav>
			<ul>
				{navMenuItems.map((item, index) => (
					<NavMenu key={`${index}+${item.label}`} label={item.label} children={item.children} />
				))}
			</ul>
		</nav>
	);
}

function NavMenu(props) {
	const { label, children = [] } = props;
	return (
		<li>
			{label}
			<ul>
				{children.map((child, index) => (
					<NavItem key={`${index}+${child.label}`} label={child.label} href={child.href} />
				))}
			</ul>
		</li>
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

export { Footer };
