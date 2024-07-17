import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function DefaultLayout() {
	return (
		<>
			<div>
				<Navbar />
				<div>
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default DefaultLayout;
