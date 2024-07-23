import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

function DefaultLayout() {
	return (
		<>
			<div className=''>
				<Navbar />
				<Outlet />
			</div>
		</>
	);
}

export default DefaultLayout;
