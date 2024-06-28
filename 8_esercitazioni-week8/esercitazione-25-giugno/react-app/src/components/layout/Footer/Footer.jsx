import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className='footer-top'>
				<div className='footer-description'>
					<div className='logo'>
						<img src='https://cdn.dribbble.com/userupload/9808588/file/original-392a3eac13328b1b5eec16783082d92e.jpg?resize=400x0' alt='Logo' width='400' height='300' />
					</div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
				</div>
				<nav>
					<NavMenuList />
				</nav>
			</div>
			<hr />
			<div className='footer-bottom'>
				<p>© 2022 Company Name</p>
				<p>
					All rights reserved. <a href='#'>Terms & Conditions</a> · <a href='#'>Privacy Policy</a>
				</p>
			</div>
		</footer>
	);
}

function NavMenuList() {
	const navMenus = [
		{
			id: 1,
			label: "About",
			children: [
				{ id: "1+1", label: "Our Story", href: "#" },
				{ id: "1+2", label: "The Team", href: "#" },
				{ id: "1+3", label: "Mission & Values", href: "#" },
				{ id: "1+4", label: "Join Us", href: "#" },
			],
		},
		{
			id: 2,
			label: "Resources",
			children: [
				{ id: "2+1", label: "Guides", href: "#" },
				{ id: "2+2", label: "E-books", href: "#" },
				{ id: "2+3", label: "Tools", href: "#" },
			],
		},
		{
			id: 3,
			label: "Connect",
			children: [
				{ id: "3+1", label: "Email Us", href: "#" },
				{ id: "3+2", label: "Follow on Twitter", href: "#" },
				{ id: "3+3", label: "Visit on Instagram", href: "#" },
			],
		},
	];

	return (
		<ul>
			{navMenus.map((menu) => (
				<NavMenu key={menu.id} menu={menu} />
			))}
		</ul>
	);
}

function NavMenu(props) {
	const { label, href = "#", children = [] } = props.menu;
	return (
		<li>
			<a href={href}>{label}</a>
			{/* {children.length ? (...) : "non ho figli"} */}
			{Boolean(children.length) && (
				<ul>
					{children.map((child) => (
						<NavMenu key={child.id} menu={child} />
					))}
				</ul>
			)}
		</li>
	);
}

export { Footer };
