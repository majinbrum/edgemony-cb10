import { NavLink } from "react-router-dom";
import { labels } from "../data/labels.js";

const menuList = [
	{ name: labels.navHome, path: "/" },
	{ name: labels.navCreate, path: "books/create" },
];

function Navbar() {
	return (
		<>
			<nav className='flex items-center justify-between py-2 px-4 bg-slate-300'>
				<NavLink to={"/"}>
					<h1 className='font-bold'>{labels.leggiBookTitle}</h1>
				</NavLink>

				<ul className='flex gap-4'>
					{menuList.map((item, index) => (
						<li key={index}>
							<NavLink
								className={({ isActive }) => {
									return isActive ? "font-bold underline" : "";
								}}
								to={item.path}>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
