import "./Header.css";

function Header() {
	return (
		<header>
			<div className='logo'>
				<img src='https://cdn.dribbble.com/userupload/9808588/file/original-392a3eac13328b1b5eec16783082d92e.jpg?resize=400x0' alt='Logo' width='400' height='300' />
			</div>
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
