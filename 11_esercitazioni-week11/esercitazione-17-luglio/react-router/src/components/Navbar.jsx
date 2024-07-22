import { NavLink } from "react-router-dom";

const menuList = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "about" },
	{ name: "Contacts", path: "contacts" },
];

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center py-2 px-4 bg-slate-300'>
			<h1 className='font-bold'>Sito bello!</h1>
			<ul className='flex gap-4'>
				{menuList.map((item, index) => (
					<li key={index}>
						{/* <a href={item.path}>{item.name}</a> */}
						<NavLink className={({ isActive }) => (isActive ? "font-bold" : "")} to={item.path}>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
