import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import styles from "../App.module.css";

function Default() {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				<main>
					<Outlet />
				</main>
			</div>
			<div className={styles.attribution}>
				Challenge by{" "}
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
					Frontend Mentor
				</a>
				. Coded by <a href='#'>Bruna Alamia</a>.
			</div>
		</>
	);
}

export default Default;
